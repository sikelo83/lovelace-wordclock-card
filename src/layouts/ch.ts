import type { GridWord, Layout } from '../types';
import { w, minuteStep, hourIndex } from './common';

// Bärndütsch layout, based on the letter grid and time logic of
// https://github.com/manuelmeister/WordClockBerndeutsch (src/layout.cpp).
// The hour switches to the next one from :25 ("füf vor haubi sächsi").
const GRID = [
  'ESKISCHAFÜF',
  'VIERTUBFZÄÄ',
  'ZWÄNZGSIVOR',
  'ABOHAUBIEGE',
  'EISZWÖISDRÜ',
  'VIERIFÜFIQT',
  'SÄCHSISIBNI',
  'ACHTINÜNIEL',
  'ZÄNIERBEUFI',
  'ZWÖUFIAMUHR',
];

const ES = w(0, 0, 2);
const ISCH = w(0, 3, 4);
const FUEF = w(0, 8, 3);
const VIERTU = w(1, 0, 6);
const ZAEAE = w(1, 8, 3);
const ZWAENZG = w(2, 0, 6);
const VOR = w(2, 8, 3);
const AB = w(3, 0, 2);
const HAUBI = w(3, 3, 5);

// one … twelve
const HOURS = [
  w(4, 0, 3), // EIS
  w(4, 3, 4), // ZWÖI
  w(4, 8, 3), // DRÜ
  w(5, 0, 5), // VIERI
  w(5, 5, 4), // FÜFI
  w(6, 0, 6), // SÄCHSI
  w(6, 6, 5), // SIBNI
  w(7, 0, 5), // ACHTI
  w(7, 5, 4), // NÜNI
  w(8, 0, 4), // ZÄNI
  w(8, 7, 4), // EUFI
  w(9, 0, 6), // ZWÖUFI
];

export const ch: Layout = {
  grid: GRID,
  timeToWords(hours: number, minutes: number): GridWord[] {
    const step = minuteStep(minutes);
    const hour = HOURS[hourIndex(hours, step >= 25)];
    const prefix = [ES, ISCH];
    switch (step) {
      case 0:
        return [...prefix, hour];
      case 5:
        return [...prefix, FUEF, AB, hour];
      case 10:
        return [...prefix, ZAEAE, AB, hour];
      case 15:
        return [...prefix, VIERTU, AB, hour];
      case 20:
        return [...prefix, ZWAENZG, AB, hour];
      case 25:
        return [...prefix, FUEF, VOR, HAUBI, hour];
      case 30:
        return [...prefix, HAUBI, hour];
      case 35:
        return [...prefix, FUEF, AB, HAUBI, hour];
      case 40:
        return [...prefix, ZWAENZG, VOR, hour];
      case 45:
        return [...prefix, VIERTU, VOR, hour];
      case 50:
        return [...prefix, ZAEAE, VOR, hour];
      default:
        return [...prefix, FUEF, VOR, hour];
    }
  },
};
