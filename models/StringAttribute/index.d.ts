import Color from '../Color';
import { textAlignmentMap, verticalAlignmentMap } from '../../utils/maps';

declare class StringAttribute {
  _class: 'stringAttribute';
  location: number;
  attributes: {
    MSAttributedStringTextTransformAttribute: number;
    MSAttributedStringFontAttribute: {
      _class: 'fontDescriptor';
      attributes: {
        name: string;
        size: number;
      };
    };
    MSAttributedStringColorAttribute: Color;
    textStyleVerticalAlignmentKey: number;
    underlineStyle: number;
    strikethroughStyle: number;
    paragraphStyle: {
      _class: 'paragraphStyle';
      alignment: number;
    };
  };
  constructor(args?: any, json?: any);
}

export = StringAttribute;
