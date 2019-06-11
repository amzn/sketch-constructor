import fs from 'fs';
import JSZip from 'jszip';
import Meta from '../Meta';
import User from '../User';
import Document from '../Document';
import Page from '../Page';
import SharedStyle from '../SharedStyle';

declare class Sketch {
  static fromFile(path: string): Promise<Sketch>;

  document: Document;
  meta: Meta;
  user: User;
  pages: Page[];
  zip: JSZip;

  constructor(args?: any);

  getPages(predicate?: string | RegExp): Page[];

  getPage(name: string): Page | undefined;

  getLayerStyles(): SharedStyle[];

  getLayerStyle(name: string): SharedStyle | undefined;

  addLayerStyle(style: SharedStyle): void;

  addTextStyle(style: SharedStyle): void;

  getTextStyles(): SharedStyle[];

  addPage(page: any, args?: any): void;

  addArtboard(pageID: string, artboard: any): void;

  build(output: fs.PathLike | number): Promise<fs.PathLike | number>;
}

export = Sketch;
