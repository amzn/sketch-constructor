import Style from '../Style';

declare class SharedStyle {
  _class: 'sharedStyle';
  name: string;
  do_objectID: string;
  value: Style;

  static LayerStyle(args: any): SharedStyle;

  static TextStyle(args: any): SharedStyle;

  constructor(args?: any, json?: any);
}

export = SharedStyle;
