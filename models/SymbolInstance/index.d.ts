import Layer from '../Layer';

declare class SymbolInstance extends Layer {
  symbolID: string;
  overrideValues: any[];

  constructor(args?: any, json?: any);
}

export = SymbolInstance;
