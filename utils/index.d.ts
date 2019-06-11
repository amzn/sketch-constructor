import Layer from "../models/Layer";

declare const layerToClass: (layer: any) => Layer;
declare const maps: {
  textAlignmentMap: {
    left: 0,
    right: 1,
    center: 2,
    justify: 3,
  };
  verticalAlignmentMap: {
    top: 0,
    bottom: 1,
    center: 2,
  };
};
declare const stackLayers: (layers: Layer[], gutter?: number) => Layer[];

export {
  layerToClass,
  maps,
  stackLayers,
};
