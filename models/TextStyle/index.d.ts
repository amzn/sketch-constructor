import Color from '../Color';
// import { textAlignmentMap, verticalAlignmentMap } from '../../utils/maps';

declare class TextStyle {
  _class: 'textStyle';
  encodedAttributes: {
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
  verticalAlignment: number;

  constructor(args?: any, json?: any);

  getColor(): Color;

  getFontSize(): number;

  getFontName(): string;
}

export = TextStyle;
