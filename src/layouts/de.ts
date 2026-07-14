import type { GridWord, Layout } from '../types';
import { w, minuteStep, hourIndex } from './common';

// Standard German layout ("fünf vor halb", not "dreiviertel").
const GRID = [
  'ESKISTAFÜNF',
  'ZEHNZWANZIG',
  'DREIVIERTEL',
  'VORFUNKNACH',
  'HALBAELFÜNF',
  'EINSXAMZWEI',
  'DREIPMJVIER',
  'SECHSNLACHT',
  'SIEBENZWÖLF',
  'ZEHNEUNKUHR',
];

const ES = w(0, 0, 2);
const IST = w(0, 3, 3);
const FUENF = w(0, 7, 4);
const ZEHN = w(1, 0, 4);
const ZWANZIG = w(1, 4, 7);
const VIERTEL = w(2, 4, 7);
const VOR = w(3, 0, 3);
const NACH = w(3, 7, 4);
const HALB = w(4, 0, 4);
const UHR = w(9, 8, 3);
// "ES IST EIN UHR", but "fünf vor eins"
const EIN = w(5, 0, 3);

// one … twelve
const HOURS = [
  w(5, 0, 4), // EINS
  w(5, 7, 4), // ZWEI
  w(6, 0, 4), // DREI
  w(6, 7, 4), // VIER
  w(4, 7, 4), // FÜNF
  w(7, 0, 5), // SECHS
  w(8, 0, 6), // SIEBEN
  w(7, 7, 4), // ACHT
  w(9, 3, 4), // NEUN
  w(9, 0, 4), // ZEHN
  w(4, 5, 3), // ELF
  w(8, 6, 5), // ZWÖLF
];

export const de: Layout = {
  grid: GRID,
  timeToWords(hours: number, minutes: number): GridWord[] {
    const step = minuteStep(minutes);
    const idx = hourIndex(hours, step >= 25);
    const hour = HOURS[idx];
    const prefix = [ES, IST];
    switch (step) {
      case 0:
        return [...prefix, idx === 0 ? EIN : hour, UHR];
      case 5:
        return [...prefix, FUENF, NACH, hour];
      case 10:
        return [...prefix, ZEHN, NACH, hour];
      case 15:
        return [...prefix, VIERTEL, NACH, hour];
      case 20:
        return [...prefix, ZWANZIG, NACH, hour];
      case 25:
        return [...prefix, FUENF, VOR, HALB, hour];
      case 30:
        return [...prefix, HALB, hour];
      case 35:
        return [...prefix, FUENF, NACH, HALB, hour];
      case 40:
        return [...prefix, ZWANZIG, VOR, hour];
      case 45:
        return [...prefix, VIERTEL, VOR, hour];
      case 50:
        return [...prefix, ZEHN, VOR, hour];
      default:
        return [...prefix, FUENF, VOR, hour];
    }
  },
};
