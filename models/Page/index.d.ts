import uuid from 'uuid-v4';
import Artboard from '../Artboard';
import Rect from '../Rect';
import Style from '../Style';
import Group from '../Group';

declare class Page extends Group {
  _class: 'page';

  constructor(args?: any, json?: any);

  getID(): string;

  getArtboards(predicate?: string | RegExp): Artboard[];

  getArtboard(name: string): Artboard | undefined;

  addArtboard(artboard: Artboard): Page;
}

export = Page;
