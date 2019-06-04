import Color from '../Color';
import Page from '../Page';
import SharedStyle from '../SharedStyle';

declare class Document {
  _class: 'document';
  do_objectID: string;
  assets: {
    _class: 'assetCollection';
    colors: Color[];
    gradients: any[]; // TODO
    imageCollections: {
      _class: 'imageCollection';
      images: any; // TODO
    },
    images: any[]; // TODO
  };
  colorSpace: number;
  currentPageIndex: number;
  foreignLayerStyles: SharedStyle[];
  foreignSymbols: any[]; // TODO
  foreignTextStyles: SharedStyle[];
  layerStyles: {
    _class: 'sharedStyleContainer';
    objects: SharedStyle[];
  };
  layerSymbols: {
    _class: 'symbolContainer';
    objects: any[]; // TODO
  };
  layerTextStyles: {
    _class: 'sharedTextStyleContainer';
    objects: SharedStyle[];
  };
  pages: Page[];

  constructor(args?: any, json?: any);

  getLayerStyles(): SharedStyle[];

  getLayerStyle(name: string): SharedStyle | undefined;

  addLayerStyle(style:  SharedStyle): Document;

  getTextStyles(): SharedStyle[];

  addTextStyle(style: SharedStyle): Document;

  addPage(pageID: string): Document;
}

export = Document;
