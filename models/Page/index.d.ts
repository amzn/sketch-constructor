import Artboard from '../Artboard';
import Group from '../Group';

declare class Page extends Group {
  _class: 'page';

  constructor(args?: any, json?: any);

  getArtboards(predicate?: string | RegExp): Artboard[];

  getArtboard(name: string): Artboard | undefined;

  addArtboard(artboard: Artboard): Page;
}

export = Page;
