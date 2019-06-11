import Color from '../Color';

declare class Gradient {
  static GradientStop: {
    _class: 'gradientStop';
    color: Color;
    position: number;
  }

  static GradientType: {
    Linear: 0;
    Radial: 1;
    Angular: 2;
  }

  _class: 'gradient';
  elipseLength: number;
  from: string;
  to: string;
  gradientType: number;
  stops: Array<typeof Gradient.GradientStop>;

  constructor(args?: any, json?: any);
}

export = Gradient;
