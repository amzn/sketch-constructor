import ExportOptions from '../ExportOptions';
import Rect from '../Rect';
import Style from '../Style';
import Color from '../Color';
import Group from '../Group';
import RulerData from '../RulerData';

declare class Artboard extends Group {
  _class: 'artboard';
  shouldBreakMaskChain: boolean;
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
