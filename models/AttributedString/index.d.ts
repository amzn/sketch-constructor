import StringAttribute from '../StringAttribute';

declare class AttributedString {
  _class: 'attributedString';
  string: string;
  attributes: StringAttribute[];

  constructor(args?: any, json?: any);
}

export = AttributedString;
