import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { WordClockConfig, Language, Layout } from './types';
import { de } from './layouts/de';
import { ch } from './layouts/ch';
import { en } from './layouts/en';

const LAYOUTS: Record<Language, Layout> = { de, ch, en };
const DEFAULT_CONFIG: Partial<WordClockConfig> = {
  language: 'de',
  active_color: '#ffb300',
  minute_dots: true,
};

@customElement('wordclock-card')
export class WordClockCard extends LitElement {
  @state() private _config?: WordClockConfig;

  public setConfig(config: WordClockConfig): void {
    if (config.language && !LAYOUTS[config.language]) {
      throw new Error(`Unknown language: ${config.language}`);
    }
    this._config = { ...DEFAULT_CONFIG, ...config };
  }

  public getCardSize(): number {
    return 4;
  }

  public static getStubConfig(): Partial<WordClockConfig> {
    return { ...DEFAULT_CONFIG };
  }

  protected override render() {
    if (!this._config) return html``;
    // Phase 3: render the letter grid of the selected layout
    return html`
      <ha-card>
        <div class="placeholder">
          WordClock Card — ${this._config.language} (grid rendering: Phase 3)
        </div>
      </ha-card>
    `;
  }

  static override styles = css`
    .placeholder {
      padding: 16px;
      text-align: center;
      color: var(--secondary-text-color);
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
  preview: true,
});
