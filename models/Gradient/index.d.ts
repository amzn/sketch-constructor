import Color from '../Color';

declare const enum GradientType {
  Linear = 0,
  Radial = 1,
  Angular = 2
}

declare class Gradient {
  static GradientStop: {
    _class: 'gradientStop';
    color: Color;
    position: number;
  };

  static GradientType: typeof GradientType;

  _class: 'gradient';
  elipseLength: number;
  from: string;
  to: string;
  gradientType: GradientType;
  stops: Array<typeof Gradient.GradientStop>;

  constructor(args?: any, json?: any);
}

export = Gradient;
