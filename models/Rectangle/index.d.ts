import Layer from '../Layer';
import CurvePoint from '../CurvePoint';

declare class Rectangle extends Layer {
  _class: 'rectangle';
  edited: boolean;
  isClosed: boolean;
  pointRadoisBehaviour: number;
  points: CurvePoint[];
  fixedRadius: number;
  hasConvertedToNewRoundCorners: boolean;
  constructor(args?: any, json?: any);
}

export = Rectangle;
