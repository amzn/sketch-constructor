import Layer from '../Layer';

declare class Group extends Layer {
  _class: string;
  layerListExpandedType: number;
  resizingConstraint: number;
  hasClickThrough: boolean;
  constructor(args?: any, json?: any);
}

export = Group;
