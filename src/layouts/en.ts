import type { GridWord, Layout } from '../types';
import { w, minuteStep, hourIndex } from './common';

// Classic English layout ("twenty five past", hour switches from :35).
const GRID = [
  'ITLISASAMPM',
  'ACQUARTERDC',
  'TWENTYFIVEX',
  'HALFSTENFTO',
  'PASTERUNINE',
  'ONESIXTHREE',
  'FOURFIVETWO',
  'EIGHTELEVEN',
  'SEVENTWELVE',
  'TENSEOCLOCK',
];

const IT = w(0, 0, 2);
const IS = w(0, 3, 2);
const A = w(1, 0, 1);
const QUARTER = w(1, 2, 7);
const TWENTY = w(2, 0, 6);
const FIVE = w(2, 6, 4);
const HALF = w(3, 0, 4);
const TEN = w(3, 5, 3);
const TO = w(3, 9, 2);
const PAST = w(4, 0, 4);
const OCLOCK = w(9, 5, 6);

// one … twelve
const HOURS = [
  w(5, 0, 3), // ONE
  w(6, 8, 3), // TWO
  w(5, 6, 5), // THREE
  w(6, 0, 4), // FOUR
  w(6, 4, 4), // FIVE
  w(5, 3, 3), // SIX
  w(8, 0, 5), // SEVEN
  w(7, 0, 5), // EIGHT
  w(4, 7, 4), // NINE
  w(9, 0, 3), // TEN
  w(7, 5, 6), // ELEVEN
  w(8, 5, 6), // TWELVE
];

export const en: Layout = {
  grid: GRID,
  timeToWords(hours: number, minutes: number): GridWord[] {
    const step = minuteStep(minutes);
    const hour = HOURS[hourIndex(hours, step >= 35)];
    const prefix = [IT, IS];
    switch (step) {
      case 0:
        return [...prefix, hour, OCLOCK];
      case 5:
        return [...prefix, FIVE, PAST, hour];
      case 10:
        return [...prefix, TEN, PAST, hour];
      case 15:
        return [...prefix, A, QUARTER, PAST, hour];
      case 20:
        return [...prefix, TWENTY, PAST, hour];
      case 25:
        return [...prefix, TWENTY, FIVE, PAST, hour];
      case 30:
        return [...prefix, HALF, PAST, hour];
      case 35:
        return [...prefix, TWENTY, FIVE, TO, hour];
      case 40:
        return [...prefix, TWENTY, TO, hour];
      case 45:
        return [...prefix, A, QUARTER, TO, hour];
      case 50:
        return [...prefix, TEN, TO, hour];
      default:
        return [...prefix, FIVE, TO, hour];
    }
  },
};
