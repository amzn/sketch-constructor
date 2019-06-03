import Color from '../Color';
import Gradient from '../Gradient';

declare class Fill {
  static FillType: {
    Color: 0,
    Gradient: 1,
    Pattrern: 4,
    Noise: 5,
  };

  _class: 'fill';
  isEnabled: boolean;
  color: Color;
  fillType: 0 | 1 | 4 | 5;
  noiseIndex: number;
  noiseIntensity: number;
  patternFillType: number;
  patternTileScale: number;
  gradient: Gradient;

  constructor(args?: any, json?: any);
}

export = Fill;
