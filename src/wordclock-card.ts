import { LitElement, html, css, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { WordClockConfig, Language, Layout } from './types';
import { minuteDots } from './layouts/common';
import { de } from './layouts/de';
import { ch } from './layouts/ch';
import { en } from './layouts/en';
import './wordclock-card-editor';

const LAYOUTS: Record<Language, Layout> = { de, ch, en };
const DEFAULT_CONFIG: Partial<WordClockConfig> = {
  language: 'de',
  active_color: '#ffb300',
  minute_dots: true,
};

@customElement('wordclock-card')
export class WordClockCard extends LitElement {
  @state() private _config?: WordClockConfig;
  @state() private _now = new Date();
  private _timer?: number;

  public setConfig(config: WordClockConfig): void {
    if (config.language && !LAYOUTS[config.language]) {
      throw new Error(`Unknown language: ${config.language}`);
    }
    this._config = { ...DEFAULT_CONFIG, ...config };
  }

  public getCardSize(): number {
    return 4;
  }

  public getGridOptions() {
    return { columns: 6, rows: 'auto', min_columns: 4 };
  }

  public static getStubConfig(): Partial<WordClockConfig> {
    return { ...DEFAULT_CONFIG };
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('wordclock-card-editor');
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this._tick();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._timer !== undefined) window.clearTimeout(this._timer);
  }

  /** Re-render now, then again just after the next minute boundary. */
  private _tick(): void {
    this._now = new Date();
    const ms =
      (60 - this._now.getSeconds()) * 1000 - this._now.getMilliseconds();
    this._timer = window.setTimeout(() => this._tick(), ms + 50);
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const layout = LAYOUTS[this._config.language ?? 'de'];
    const hours = this._now.getHours();
    const minutes = this._now.getMinutes();

    const active = new Set<string>();
    for (const word of layout.timeToWords(hours, minutes)) {
      for (let c = word.col; c < word.col + word.len; c++) {
        active.add(`${word.row}/${c}`);
      }
    }
    const dots = this._config.minute_dots ? minuteDots(minutes) : 0;

    const styles = [
      `--wc-active: ${this._config.active_color}`,
      this._config.inactive_color
        ? `--wc-inactive: ${this._config.inactive_color}`
        : '',
      this._config.background ? `background: ${this._config.background}` : '',
    ]
      .filter(Boolean)
      .join('; ');

    return html`
      <ha-card style=${styles}>
        <div class="frame">
          <div class="inner">
          ${this._config.minute_dots
            ? html`
                <span class="dot tl ${dots >= 1 ? 'on' : ''}"></span>
                <span class="dot tr ${dots >= 2 ? 'on' : ''}"></span>
                <span class="dot br ${dots >= 3 ? 'on' : ''}"></span>
                <span class="dot bl ${dots >= 4 ? 'on' : ''}"></span>
              `
            : nothing}
          <div class="grid" role="img" aria-label=${this._time24()}>
            ${layout.grid.map((row, r) =>
              [...row].map(
                (letter, c) => html`
                  <span class="cell ${active.has(`${r}/${c}`) ? 'on' : ''}">
                    ${letter}
                  </span>
                `,
              ),
            )}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _time24(): string {
    const h = String(this._now.getHours()).padStart(2, '0');
    const m = String(this._now.getMinutes()).padStart(2, '0');
    return `${h}:${m}`;
  }

  static override styles = css`
    ha-card {
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    /* Square clock, capped by viewport height so wide/panel views never clip it. */
    .frame {
      container-type: inline-size;
      width: min(100%, calc(100vh - 130px));
      width: min(100%, calc(100dvh - 130px));
      aspect-ratio: 1;
    }
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 7cqw;
      box-sizing: border-box;
    }
    .grid {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(10, 1fr);
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto Mono', ui-monospace, monospace;
      font-size: 4.5cqw;
      font-weight: 600;
      color: var(
        --wc-inactive,
        color-mix(in srgb, var(--primary-text-color) 18%, transparent)
      );
      transition: color 0.6s ease, text-shadow 0.6s ease;
      user-select: none;
    }
    .cell.on {
      color: var(--wc-active);
      text-shadow: 0 0 0.5em
        color-mix(in srgb, var(--wc-active) 55%, transparent);
    }
    .dot {
      position: absolute;
      width: 2cqw;
      height: 2cqw;
      border-radius: 50%;
      background: var(
        --wc-inactive,
        color-mix(in srgb, var(--primary-text-color) 18%, transparent)
      );
      transition: background 0.6s ease, box-shadow 0.6s ease;
    }
    .dot.on {
      background: var(--wc-active);
      box-shadow: 0 0 0.5em
        color-mix(in srgb, var(--wc-active) 55%, transparent);
    }
    .dot.tl {
      top: 2.5cqw;
      left: 2.5cqw;
    }
    .dot.tr {
      top: 2.5cqw;
      right: 2.5cqw;
    }
    .dot.br {
      bottom: 2.5cqw;
      right: 2.5cqw;
    }
    .dot.bl {
      bottom: 2.5cqw;
      left: 2.5cqw;
    }
  `;
}

declare global {
  interface Window {
    customCards?: unknown[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'wordclock-card',
  name: 'WordClock Card',
  description:
    'Word clock with German, Swiss German (Bärndütsch) and English layouts.',
  documentationURL: 'https://github.com/sikelo83/lovelace-wordclock-card',
  preview: true,
});
