import Border from '../Border';
import Fill from '../Fill';
import GraphicsContextSettings from '../GraphicsContextSettings';
import Shadow from '../Shadow';
import TextStyle from '../TextStyle';

declare const enum MarkerType {
  none = 0,
  openArrow = 1,
  filledArrow = 2,
  line = 3,
  openCircle = 4,
  filledCircle = 5,
  openSquare = 6,
  filledSquare = 7
}

declare const enum WindingRule {} // TODO

declare const enum BlendMode {
  Normal = 0,
  Darken = 1,
  Multiply = 2,
  ColorBurn = 3,
  Lighten = 4,
  Screen = 5,
  ColorDodge = 6,
  Overlay = 7,
  SoftLight = 8,
  HardLight = 9,
  Difference = 10,
  Exclusion = 11,
  Hue = 12,
  Saturation = 13,
  Color = 14,
  Luminosity = 15
}

declare class Style {
  static MarkerType: typeof MarkerType;

  static WindingRule: typeof WindingRule;

  static BlendMode: typeof BlendMode;

  static LayerStyle(args?: any): Style;

  static TextStyle(args?: any): Style;

  _class: 'style';
  do_objectID: string;
  startMarkerType: MarkerType;
  endMarkerType: MarkerType;
  miterLimit: number;
  windingRule: number;
  borders: Border[];
  fills: Fill[];
  shadows: Shadow[];
  textStyle: TextStyle;
  contextSettings: GraphicsContextSettings;

  constructor(args?: any, json?: any);
}

export = Style;
