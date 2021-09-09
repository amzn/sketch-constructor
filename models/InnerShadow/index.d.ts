import Color from '../Color';
import GraphicsContextSettings from '../GraphicsContextSettings';

declare class InnerShadow {
  _class: 'innerShadow';
  isEnabled: boolean;
  blurRadius: number;
  color: Color;
  contextSettings: GraphicsContextSettings;
  offsetX: number;
  offsetY: number;
  spread: number;

  constructor(args?: any, json?: any);
}

export = InnerShadow;
