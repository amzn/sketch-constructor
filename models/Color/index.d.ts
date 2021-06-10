import { Instance } from 'tinycolor2';

declare class Color {
  _class: 'color';
  alpha: number;
  blue: number;
  green: number;
  red: number;
  swatchID?: string;

  constructor(args?: any, json?: any);

  set(tinyColor: Instance): Color;

  _getTinyColor(): Instance;
}

export = Color;
