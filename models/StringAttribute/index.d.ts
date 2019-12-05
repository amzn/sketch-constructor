import Color from '../Color';
import ParagraphStyle = require('../ParagraphStyle');

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
    paragraphStyle: ParagraphStyle;
  };
  constructor(args?: any, json?: any);
}

export = StringAttribute;
