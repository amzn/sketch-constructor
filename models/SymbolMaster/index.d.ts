import Artboard from '../Artboard';
import Layer from '../Layer';

declare class SymbolMaster extends Artboard {
  symbolID: string;
  changeIdentifier: number;
  overrideProperties: Array<object>;
  allowsOverrides: boolean;

  constructor(args?: any, json?: any);
  // addLayer(layer: Layer, canOverride: boolean): this;
}

export = SymbolMaster;
