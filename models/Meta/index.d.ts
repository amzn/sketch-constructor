import Artboard from '../Artboard';
import Page from '../Page';

declare class Meta {
  commit: string;
  pagesAndArtboards: any;
  version: number;
  fonts: any[]; // TODO
  compatibilityVersion: number;
  app: string;
  autosaved: number;
  variant: string;
  created: {
    commit: string;
    appVersion: string;
    build: number;
    app: string;
    compatibilityVersion: number;
    version: number;
    variant: string;
  };
  saveHistory: string[];
  appVersion: string;
  build: string;

  constructor(args?: any, json?: any);

  addPage(page: Page): void;

  addArtboard(pageID: string, artboard: Artboard): void;
}

export = Meta;
