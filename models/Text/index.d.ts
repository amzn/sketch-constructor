import Layer from '../Layer';
import AttributedString from '../AttributedString';

declare class Text extends Layer {
  automaticallyDrawOnUnderlyingPath: boolean;
  dontSynchroniseWithSymbol: boolean;
  attributedString: AttributedString;
  glyphBounds: string;
  lineSpacingBehaviour: number;
  textBehaviour: number;

  constructor(args?: any, json?: any);
}

export = Text;
