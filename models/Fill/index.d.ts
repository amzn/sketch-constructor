import Color from '../Color';
import Gradient from '../Gradient';
import GraphicsContextSettings from '../GraphicsContextSettings';

declare const enum FillType {
  Color = 0,
  Gradient = 1,
  Pattern = 4,
  Noise = 5,
}

declare class Fill {
  static FillType: typeof FillType;

  _class: 'fill';
  isEnabled: boolean;
  color: Color;
  fillType: FillType;
  noiseIndex: number;
  noiseIntensity: number;
  patternFillType: number;
  patternTileScale: number;
  gradient: Gradient;
  contextSettings: GraphicsContextSettings;

  constructor(args?: any, json?: any);
}

export = Fill;
