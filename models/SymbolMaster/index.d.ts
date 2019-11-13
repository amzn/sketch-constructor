import Artboard from '../Artboard';
import Layer from '../Layer';
import SymbolInstance from '../SymbolInstance';

declare class SymbolMaster extends Artboard {
  symbolID: string;
  changeIdentifier: number;
  overrideProperties: Array<object>;
  allowsOverrides: boolean;

  constructor(args?: any, json?: any);
  // addLayer(layer: Layer, canOverride: boolean): this;

  updateInstance(symbolInstance: SymbolInstance, name: string, args: Object): any;

  createInstance(args: Object): SymbolInstance;
}

export = SymbolMaster;
