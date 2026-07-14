import { LitElement, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { WordClockConfig } from './types';

interface HassLike {
  locale?: { language?: string };
  language?: string;
}

type RGB = [number, number, number];

const hexToRgb = (hex?: string): RGB | undefined => {
  const m = hex?.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return undefined;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const rgbToHex = (rgb?: RGB): string | undefined =>
  Array.isArray(rgb)
    ? `#${rgb.map((v) => v.toString(16).padStart(2, '0')).join('')}`
    : undefined;

const LABELS: Record<string, Record<string, string>> = {
  de: {
    language: 'Sprache',
    active_color: 'Farbe der aktiven Buchstaben',
    minute_dots: 'Minuten-Punkte (+1…+4) anzeigen',
    advanced: 'Erweitert',
    inactive_color: 'Farbe der inaktiven Buchstaben',
    background: 'Hintergrundfarbe',
    lang_de: 'Deutsch',
    lang_ch: 'Schweizerdeutsch (Bärndütsch)',
    lang_en: 'Englisch',
  },
  en: {
    language: 'Language',
    active_color: 'Active letter color',
    minute_dots: 'Show minute dots (+1…+4)',
    advanced: 'Advanced',
    inactive_color: 'Inactive letter color',
    background: 'Background color',
    lang_de: 'German',
    lang_ch: 'Swiss German (Bärndütsch)',
    lang_en: 'English',
  },
};

@customElement('wordclock-card-editor')
export class WordClockCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HassLike;
  @state() private _config?: WordClockConfig;

  public setConfig(config: WordClockConfig): void {
    this._config = config;
  }

  private _labels(): Record<string, string> {
    const lang = (
      this.hass?.locale?.language ??
      this.hass?.language ??
      'en'
    ).toLowerCase();
    return lang.startsWith('de') ? LABELS.de : LABELS.en;
  }

  private _schema(l: Record<string, string>) {
    return [
      {
        name: 'language',
        required: true,
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: 'de', label: l.lang_de },
              { value: 'ch', label: l.lang_ch },
              { value: 'en', label: l.lang_en },
            ],
          },
        },
      },
      { name: 'active_color', selector: { color_rgb: {} } },
      { name: 'minute_dots', selector: { boolean: {} } },
      {
        name: 'advanced',
        type: 'expandable',
        flatten: true,
        title: l.advanced,
        schema: [
          { name: 'inactive_color', selector: { color_rgb: {} } },
          { name: 'background', selector: { color_rgb: {} } },
        ],
      },
    ];
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const l = this._labels();
    const data = {
      language: this._config.language ?? 'de',
      active_color: hexToRgb(this._config.active_color ?? '#ffb300'),
      minute_dots: this._config.minute_dots ?? true,
      inactive_color: hexToRgb(this._config.inactive_color),
      background: hexToRgb(this._config.background),
    };
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${this._schema(l)}
        .computeLabel=${(s: { name: string }) => l[s.name] ?? s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const v = ev.detail.value;
    const config: WordClockConfig = {
      ...this._config,
      language: v.language,
      active_color: rgbToHex(v.active_color) ?? this._config.active_color,
      minute_dots: v.minute_dots,
    };
    const inactive = rgbToHex(v.inactive_color);
    const background = rgbToHex(v.background);
    if (inactive) config.inactive_color = inactive;
    if (background) config.background = background;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
