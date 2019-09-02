import Layer = require('../Layer');
import CurvePoint = require('../CurvePoint');

declare class ShapePath extends Layer {
  _class: 'shapePath';
  edited: boolean;
  isClosed: boolean;
  pointRadiusBehaviour: number;
  points: CurvePoint[];

  constructor(args: any, json: any);
}

export = ShapePath;
