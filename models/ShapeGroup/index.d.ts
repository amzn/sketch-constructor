import Layer from '../Layer';

declare class ShapeGroup extends Layer {
  static Rectangle(args: any): ShapeGroup;

  static Oval(args: any): ShapeGroup;

  static ShapePath(args: any): ShapeGroup;

  _class: 'shapeGroup';
  layerListExpandedType: number;
  clippingMaskMode: number;
  hasClippingMask: boolean;
  windingRule: number;

  constructor(args?: any, json?: any);
}

export = ShapeGroup;
