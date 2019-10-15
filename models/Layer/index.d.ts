import ExportOptions from '../ExportOptions';
import Group from '../Group';
import Rect from '../Rect';
import SharedStyle from '../SharedStyle';
import Style from '../Style';

declare class Layer {
  _class: string;
  do_objectID: string;
  booleanOperation: number;
  exportOptions: ExportOptions;
  frame: Rect;
  isFixedToViewport: boolean;
  isFlippedHorizontal: boolean;
  isFlippedVertical: boolean;
  isLocked: boolean;
  isVisible: boolean;
  layerListExpandedType: number;
  name: string;
  nameIsFixed: boolean;
  resizingConstraint: number;
  resizingType: number;
  rotation: number;
  shouldBreakMaskChain: boolean;
  style: Style;

  constructor(args?: any, json?: any);

  addLayer(layer: Layer): Layer;

  setSharedStyle(style: SharedStyle): void;

  getGroups(): Group[];

  getLayers(predicate?: string | RegExp): Layer[];

  getAllLayers(predicate?: string | RegExp): Layer[];

  getID(): string;
}

export = Layer;
