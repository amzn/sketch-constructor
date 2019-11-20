import Color from '../Color';
import Group from '../Group';
import RulerData from '../RulerData';

declare class Artboard extends Group {
  _class: 'artboard';
  backgroundColor: Color;
  hasBackgroundColor: boolean;
  horizontalRulerData: RulerData;
  verticalRulerData: RulerData;
  includeBackgroundColorInExport: boolean;
  includeInCloudUpload: boolean;
  isFlowHome: boolean;
  resizesContent: boolean;

  constructor(args?: any, json?: any);
}

export = Artboard;
