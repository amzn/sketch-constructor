import Color from '../Color';

declare const enum Position {
  Inside = 1,
  Center = 0,
  Outside = 2
}

declare class Border {
  static Position: typeof Position;

  constructor(args?: any, json?: any);

  _class: 'border';
  isEnabled: boolean;
  color: Color;
  fillType: number;
  position: Position;
  thickness: number;
}

export = Border;
