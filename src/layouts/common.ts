import type { GridWord } from '../types';

export const w = (row: number, col: number, len: number): GridWord => ({
  row,
  col,
  len,
});

/** Round minutes down to the displayed 5-minute step. */
export const minuteStep = (minutes: number): number =>
  Math.floor((minutes % 60) / 5) * 5;

/** Number of lit corner dots: minutes past the 5-minute step (0–4). */
export const minuteDots = (minutes: number): number => minutes % 5;

/**
 * Index into a 12-entry hour word array ordered [one … twelve].
 * `shift` advances to the next hour (used from :25 in de/ch, from :35 in en).
 */
export const hourIndex = (hours: number, shift: boolean): number =>
  (hours + (shift ? 1 : 0) + 11) % 12;
