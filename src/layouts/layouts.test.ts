import { describe, expect, it } from 'vitest';
import type { GridWord, Layout } from '../types';
import { minuteDots, minuteStep } from './common';
import { ch } from './ch';
import { de } from './de';
import { en } from './en';

const LAYOUTS: Record<string, Layout> = { ch, de, en };

function text(layout: Layout, words: GridWord[]): string {
  return words
    .map((w) => layout.grid[w.row].slice(w.col, w.col + w.len))
    .join(' ');
}

function sentence(layout: Layout, hours: number, minutes: number): string {
  return text(layout, layout.timeToWords(hours, minutes));
}

describe.each(Object.entries(LAYOUTS))('%s grid', (_name, layout) => {
  it('is 10 rows of 11 letters', () => {
    expect(layout.grid).toHaveLength(10);
    for (const row of layout.grid) expect(row).toHaveLength(11);
  });

  it('produces in-bounds, non-overlapping words for every 5-minute step', () => {
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 5) {
        const words = layout.timeToWords(h, m);
        expect(words.length).toBeGreaterThanOrEqual(3);
        const seen = new Set<string>();
        for (const w of words) {
          expect(w.row).toBeGreaterThanOrEqual(0);
          expect(w.row).toBeLessThan(10);
          expect(w.col).toBeGreaterThanOrEqual(0);
          expect(w.col + w.len).toBeLessThanOrEqual(11);
          for (let c = w.col; c < w.col + w.len; c++) {
            const key = `${w.row}/${c}`;
            expect(seen.has(key), `overlap at ${key} (${h}:${m})`).toBe(false);
            seen.add(key);
          }
        }
      }
    }
  });
});

describe('ch (Bärndütsch)', () => {
  const cases: Array<[number, number, string]> = [
    [16, 0, 'ES ISCH VIERI'],
    [16, 5, 'ES ISCH FÜF AB VIERI'],
    [16, 10, 'ES ISCH ZÄÄ AB VIERI'],
    [16, 15, 'ES ISCH VIERTU AB VIERI'],
    [16, 20, 'ES ISCH ZWÄNZG AB VIERI'],
    [16, 25, 'ES ISCH FÜF VOR HAUBI FÜFI'],
    [16, 30, 'ES ISCH HAUBI FÜFI'],
    [16, 35, 'ES ISCH FÜF AB HAUBI FÜFI'],
    [16, 40, 'ES ISCH ZWÄNZG VOR FÜFI'],
    [16, 45, 'ES ISCH VIERTU VOR FÜFI'],
    [16, 50, 'ES ISCH ZÄÄ VOR FÜFI'],
    [16, 55, 'ES ISCH FÜF VOR FÜFI'],
    [0, 0, 'ES ISCH ZWÖUFI'],
    [12, 30, 'ES ISCH HAUBI EIS'],
    [23, 45, 'ES ISCH VIERTU VOR ZWÖUFI'],
    [17, 25, 'ES ISCH FÜF VOR HAUBI SÄCHSI'],
  ];
  it.each(cases)('%i:%i → %s', (h, m, expected) => {
    expect(sentence(ch, h, m)).toBe(expected);
  });
});

describe('de (Deutsch)', () => {
  const cases: Array<[number, number, string]> = [
    [16, 0, 'ES IST VIER UHR'],
    [16, 5, 'ES IST FÜNF NACH VIER'],
    [16, 10, 'ES IST ZEHN NACH VIER'],
    [16, 15, 'ES IST VIERTEL NACH VIER'],
    [16, 20, 'ES IST ZWANZIG NACH VIER'],
    [16, 25, 'ES IST FÜNF VOR HALB FÜNF'],
    [16, 30, 'ES IST HALB FÜNF'],
    [16, 35, 'ES IST FÜNF NACH HALB FÜNF'],
    [16, 40, 'ES IST ZWANZIG VOR FÜNF'],
    [16, 45, 'ES IST VIERTEL VOR FÜNF'],
    [16, 50, 'ES IST ZEHN VOR FÜNF'],
    [16, 55, 'ES IST FÜNF VOR FÜNF'],
    [13, 0, 'ES IST EIN UHR'],
    [12, 55, 'ES IST FÜNF VOR EINS'],
    [0, 0, 'ES IST ZWÖLF UHR'],
    [12, 30, 'ES IST HALB EINS'],
    [22, 45, 'ES IST VIERTEL VOR ELF'],
  ];
  it.each(cases)('%i:%i → %s', (h, m, expected) => {
    expect(sentence(de, h, m)).toBe(expected);
  });
});

describe('en (English)', () => {
  const cases: Array<[number, number, string]> = [
    [16, 0, 'IT IS FOUR OCLOCK'],
    [16, 5, 'IT IS FIVE PAST FOUR'],
    [16, 10, 'IT IS TEN PAST FOUR'],
    [16, 15, 'IT IS A QUARTER PAST FOUR'],
    [16, 20, 'IT IS TWENTY PAST FOUR'],
    [16, 25, 'IT IS TWENTY FIVE PAST FOUR'],
    [16, 30, 'IT IS HALF PAST FOUR'],
    [16, 35, 'IT IS TWENTY FIVE TO FIVE'],
    [16, 40, 'IT IS TWENTY TO FIVE'],
    [16, 45, 'IT IS A QUARTER TO FIVE'],
    [16, 50, 'IT IS TEN TO FIVE'],
    [16, 55, 'IT IS FIVE TO FIVE'],
    [0, 0, 'IT IS TWELVE OCLOCK'],
    [12, 30, 'IT IS HALF PAST TWELVE'],
    [23, 50, 'IT IS TEN TO TWELVE'],
  ];
  it.each(cases)('%i:%i → %s', (h, m, expected) => {
    expect(sentence(en, h, m)).toBe(expected);
  });
});

describe('minute helpers', () => {
  it('rounds down to the 5-minute step', () => {
    expect(minuteStep(0)).toBe(0);
    expect(minuteStep(4)).toBe(0);
    expect(minuteStep(5)).toBe(5);
    expect(minuteStep(29)).toBe(25);
    expect(minuteStep(59)).toBe(55);
  });

  it('lights 0–4 corner dots', () => {
    expect(minuteDots(0)).toBe(0);
    expect(minuteDots(1)).toBe(1);
    expect(minuteDots(4)).toBe(4);
    expect(minuteDots(5)).toBe(0);
    expect(minuteDots(59)).toBe(4);
  });

  it('non-step minutes render like their step', () => {
    for (const [, layout] of Object.entries(LAYOUTS)) {
      expect(sentence(layout, 16, 27)).toBe(sentence(layout, 16, 25));
      expect(sentence(layout, 16, 59)).toBe(sentence(layout, 16, 55));
    }
  });
});
