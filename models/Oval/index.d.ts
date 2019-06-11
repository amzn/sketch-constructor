import Layer from '../Layer';
import CurvePoint from '../CurvePoint';

declare class Oval extends Layer {
  _class: 'oval';
  edited: boolean;
  isClosed: boolean;
  pointRadiusBehaviour: number;
  points: CurvePoint[];
  constructor(args?: any, json?: any);
}

export = Oval;
