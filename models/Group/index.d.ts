import uuid from 'uuid-v4';
import Layer from '../Layer';
import Rect from '../Rect';
import Style from '../Style';

declare class Group extends Layer {
  _class: 'group';
  layerListExpandedType: number;
  resizingConstraint: number;
  hasClickThrough: boolean;
  constructor(args?: any, json?: any);
}

export = Group;
