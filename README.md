# WordClock Card

Lovelace word clock card for Home Assistant — displays the time as illuminated words
in a letter grid. Supports German, Swiss German (Bärndütsch) and English, with
configurable colors. Installable via HACS.

Inspired by [WordClockBerndeutsch](https://github.com/manuelmeister/WordClockBerndeutsch)
by Manuel Meister — this card reuses its Bärndütsch letter grid idea and time-to-words
logic as a pure frontend card.

> **Status: Work in progress** — not yet released.

## Installation

### HACS (recommended)

1. HACS → Custom repositories → add `https://github.com/sikelo83/lovelace-wordclock-card`
   (category: *Dashboard*)
2. Install **WordClock Card**
3. Reload your browser

### Manual

Copy `dist/wordclock-card.js` to `/config/www/` and add it as a dashboard resource:
`/local/wordclock-card.js` (type: JavaScript module).

## Configuration

The card can be configured via the UI editor. YAML options:

| Option | Type | Default | Description |
|---|---|---|---|
| `type` | string | **required** | `custom:wordclock-card` |
| `language` | string | `de` | `de` (German), `ch` (Swiss German / Bärndütsch), `en` (English) |
| `active_color` | string | `#ffb300` | Color of the lit letters |
| `inactive_color` | string | theme-based | Color of the dimmed letters |
| `background` | string | theme-based | Card background color |
| `minute_dots` | boolean | `true` | Show 4 corner dots indicating +1…+4 minutes past the displayed 5-minute step |

Example:

```yaml
type: custom:wordclock-card
language: ch
active_color: '#ffb300'
```

## Development

```sh
npm install
npm run build      # bundle to dist/wordclock-card.js
npm run watch      # rebuild on change
npm test           # time-logic tests
```

## License

MIT — see [LICENSE](LICENSE).
