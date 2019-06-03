import uuid from 'uuid-v4';
import Layer from '../Layer';
import Rectangle from '../Rectangle';
import Oval from '../Oval';
import Rect from '../Rect';
import Style from '../Style';

declare class ShapeGroup extends Layer {
  static Rectangle(args: any): ShapeGroup;

  static Oval(args: any): ShapeGroup;

  _class: 'shapeGroup';
  layerListExpandedType: number;
  clippingMaskMode: number;
  hasClippingMask: boolean;
  windingRule: number;

  constructor(args?: any, json?: any);
}