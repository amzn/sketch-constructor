import Color from '../Color';

declare class Shadow {
  _class: 'shadow';
  isEnabled: boolean;
  blurRadius: number;
  color: Color;
  contextSettings: {
    _class: 'graphicsContextSettings';
    blendMode: number;
    opacity: number;
  };
  offsetX: number;
  offsetY: number;
  spread: number;

  constructor(args?: any, json?: any);
}

export = Shadow;
