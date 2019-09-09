declare const enum LineCapStyle {
  butt = 0,
  round = 1,
  projecting = 2
}
declare const enum LineJoinStyle {
  miter = 0,
  round = 1,
  bevel = 2
}

declare class BorderOptions {
  static LineCapStyle: typeof LineCapStyle;

  static LineJoinStyle: typeof LineJoinStyle;

  constructor(args?: any, json?: any);

  _class: 'borderOptions';
  isEnabled: boolean;
  dashPattern: number[];
  lineCapStyle: LineCapStyle;
  lineJoinStyle: LineJoinStyle;
}

export = BorderOptions;
