declare class BorderOptions {
  static LineCapStyle: {
    butt: 0;
    round: 1;
    projecting: 2;
  };

  static LineJoinStyle: {
    miter: 0;
    round: 1;
    bevel: 2;
  };

  constructor(args?: any, json?: any);

  _class: 'borderOptions';
  isEnabled: boolean;
  dashPattern: number[];
  lineCapStyle: 0 | 1 | 2;
  lineJoinStyle: 0 | 1 | 2;
}

export = BorderOptions;
