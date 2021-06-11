import { Color } from '..';

declare class Swatch {
  _class: 'swatch';
  do_objectID: string;
  value: Color;

  constructor(args?: any, json?: any);
}

export = Swatch;
