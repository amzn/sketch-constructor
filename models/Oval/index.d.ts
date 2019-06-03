import uuid from 'uuid-v4';
import Layer from '../Layer';
import CurvePoint from '../CurvePoint';
import Rect from '../Rect';
import Style from '../Style';

declare class Oval extends Layer {
  _class: 'oval';
  edited: boolean;
  isClosed: boolean;
  pointRadiusBehaviour: number;
  points: CurvePoint[];
  constructor(args?: any, json?: any);
}

export = Oval;
