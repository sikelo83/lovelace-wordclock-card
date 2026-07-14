export type Language = 'de' | 'ch' | 'en';

export interface WordClockConfig {
  type: string;
  language?: Language;
  active_color?: string;
  inactive_color?: string;
  background?: string;
}

/** A word on the grid: row index, start column and length. */
export interface GridWord {
  row: number;
  col: number;
  len: number;
}

export interface Layout {
  /** Letter rows, all the same length. */
  grid: string[];
  /** Maps a time to the words to light up, in reading order. */
  timeToWords(hours: number, minutes: number): GridWord[];
}
