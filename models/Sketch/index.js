/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

const fs = require('fs-extra');
const JSZip = require('jszip');
const Meta = require('../Meta');
const User = require('../User');
const Document = require('../Document');
const Page = require('../Page');
const Artboard = require('../Artboard');
const SharedStyle = require('../SharedStyle');

class Sketch {
  static fromFile(path) {
    let sketch = new Sketch();

    return JSZip.loadAsync(fs.readFileSync(path)).then((zip) => {
      return Promise.all([
        zip.file('document.json').async('string'),
        zip.file('meta.json').async('string'),
        zip.file('user.json').async('string')
      ]).then((args) => {
        sketch.document = new Document(null, JSON.parse(args[0]) ),
        sketch.meta = new Meta(null, JSON.parse(args[1]) ),
        sketch.user = new User(null, JSON.parse(args[2]) );

        return Promise.all(
          Object.keys(sketch.meta.pagesAndArtboards).map((pageID) => {
            return zip.file(`pages/${pageID}.json`).async('string');
          })
        );
      }).then((args) => {
        sketch.pages = args.map((str) => {
          return new Page( null, JSON.parse(str) );
        });
        return sketch;
      });
    });
  }

  constructor(args = {}) {
    Object.assign(this, {
      meta: new Meta(args.meta),
      document: new Document(args.document),
      user: new User(args.use),
      pages: [],
      zip: new JSZip()
    });
    return this;
  }

  getPages(predicate) {
    if (predicate) {
      return this.pages.filter(predicate);
    } else {
      return this.pages;
    }
  }

  getPage(name) {
    return this.pages.find(page => page.name === name);
  }

  getLayerStyles() {
    return this.document.getLayerStyles();
  }

  getLayerStyle(name) {
    return this.document.getLayerStyle(name);
  }

  addLayerStyle(style) {
    if (!(style instanceof SharedStyle)) {
      style = SharedStyle.LayerStyle( style );
    }

    this.document.addLayerStyle( style );
  }

  addTextStyle(style) {
    if (!(style instanceof SharedStyle)) {
      style = SharedStyle.TextStyle( style );
    }

    this.document.addTextStyle( style );
  }

  getTextStyles() {
    return this.document.getTextStyles();
  }

  addPage(page, args) {
    if (!(page instanceof Page)) {
      page = new Page( page );
    }
    this.document.addPage(page.getID());
    this.meta.addPage(page);
    this.user.addPage(page.getID(), args);
    this.pages = this.pages.concat( page );
    page.getArtboards().forEach(artboard => {
      this.meta.addArtboard(page.getID(), artboard);
    });
  }

  addArtboard(pageID, artboard) {
    if (!artboard instanceof Artboard) {
      artboard = new Artboard( artboard );
    }
    let page = this.pages.find(page => page.getID() === pageID);
    page.addArtboard(artboard);
    this.meta.addArtboard(pageID, artboard);
  }



  build(output) {
    this.zip.file('meta.json', JSON.stringify(this.meta))
            .file('user.json', JSON.stringify(this.user))
            .file('document.json', JSON.stringify(this.document));

    this.zip.folder('pages');
    this.zip.folder('previews');

    this.pages.forEach((page) => {
      this.zip.file(`pages/${page.do_objectID}.json`, JSON.stringify(page))
    });

    return this.zip.generateAsync({ type:'nodebuffer', streamFiles:true })
        .then((buffer) => {
          fs.writeFileSync(output, buffer);
          return output;
        });
  }
}

module.exports = Sketch;