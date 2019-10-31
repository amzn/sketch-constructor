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
  blendModeMap: {
    normal: 0,
    darken: 1,
    multiply: 2,
    colorBurn: 3,
    lighten: 4,
    screen: 5,
    colorDodge: 6,
    overlay: 7,
    softLight: 8,
    hardLight: 9,
    difference: 10,
    exclusion: 11,
    hue: 12,
    saturation: 13,
    luminosity: 14,
    plusDarker: 15,
    plusLighter: 16,
  };
};
declare const stackLayers: (layers: Layer[], gutter?: number) => Layer[];

export {
  layerToClass,
  maps,
  stackLayers,
};
