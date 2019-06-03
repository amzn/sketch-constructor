import Artboard from '../Artboard';

declare class SymbolMaster extends Artboard {
  symbolID: string;
  changeIdentifier: number;

  constructor(args?: any, json?: any);
}

export = SymbolMaster;
