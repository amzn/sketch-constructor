import Color from '../Color';

declare class Border {
  static Position: {
    Inside: 1;
    Center: 0;
    Outside: 2;
  };

  constructor(args?: any, json?: any);

  _class: 'border';
  isEnabled: boolean;
  color: Color;
  fillType: number;
  position: 0 | 1 | 2;
  thickness: number;
}

export = Border;
