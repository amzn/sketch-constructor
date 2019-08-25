import TextStyle from '../TextStyle';
import Fill from '../Fill';
import Border from '../Border';
import Shadow from '../Shadow';
import GraphicsContextSettings from '../GraphicsContextSettings';

declare class Style {
  static MarkerType: {
    none: 0;
    openArrow: 1;
    filledArrow: 2;
    line: 3;
    openCircle: 4;
    filledCircle: 5;
    openSquare: 6;
    filledSquare: 7;
  };

  static WindingRule: {[key: string]: number}; // TODO

  static BlendMode: {
    Normal: 0;
    Darken: 1;
    Multiply: 2;
    ColorBurn: 3;
    Lighten: 4;
    Screen: 5;
    ColorDodge: 6;
    Overlay: 7;
    SoftLight: 8;
    HardLight: 9;
    Difference: 10;
    Exclusion: 11;
    Hue: 12;
    Saturation: 13;
    Color: 14;
    Luminosity: 15;
  };

  static LayerStyle(args?: any): Style;

  static TextStyle(args?: any): Style;

  _class: 'style';
  do_objectID: string;
  startMarkerType: number;
  endMarkerType: number;
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