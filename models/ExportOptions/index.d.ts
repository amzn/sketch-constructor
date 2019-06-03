import ExportFormat from '../ExportFormat';

declare class ExportOptions {
  _class: 'exportOptions';
  exportFormats: ExportFormat[];
  includedLayerIds: string[];
  layerOptions: number;
  shouldTrim: boolean;
  constructor(args?: any, json?: any);
}
