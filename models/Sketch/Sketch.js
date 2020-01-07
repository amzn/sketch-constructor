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
const path = require('path');
const JSZip = require('jszip');
const Meta = require('../Meta');
const User = require('../User');
const Document = require('../Document');
const Page = require('../Page');
const Artboard = require('../Artboard');
const SharedStyle = require('../SharedStyle');
const { STORAGE_DIR, STORAGE_IMG_DIR, STORAGE_PREVIEW_DIR, STORAGE_PREVIEW_FILE } = require('../../utils/paths');

class Sketch {
  static fromFile(filePath) {
    const sketch = new Sketch();

    return JSZip.loadAsync(fs.readFileSync(filePath)).then(zip =>
      Promise.all([
        zip.file('document.json').async('string'),
        zip.file('meta.json').async('string'),
        zip.file('user.json').async('string'),
      ])
        .then(([document, meta, user]) => {
          sketch.document = new Document(null, JSON.parse(document));
          sketch.meta = new Meta(null, JSON.parse(meta));
          sketch.user = new User(null, JSON.parse(user));

          return Promise.all(
            Object.keys(sketch.meta.pagesAndArtboards).map(pageID => zip.file(`pages/${pageID}.json`).async('string'))
          );
        })
        .then(args => {
          sketch.pages = args.map(str => new Page(null, JSON.parse(str)));
          return sketch;
        })
    );
  }

  static fromExtractedFile(filePath) {
    const sketch = new Sketch();
    return Promise.all([
      fs.readJSON(path.resolve(filePath, 'document.json'), { encoding: 'utf8' }),
      fs.readJSON(path.resolve(filePath, 'meta.json'), { encoding: 'utf8' }),
      fs.readJSON(path.resolve(filePath, 'user.json'), { encoding: 'utf8' }),
    ])
      .then(([document, meta, user]) => {
        sketch.document = new Document(null, document);
        sketch.meta = new Meta(null, meta);
        sketch.user = new User(null, user);

        return Promise.all(
          Object.keys(sketch.meta.pagesAndArtboards).map(pageID =>
            fs.readJSON(path.resolve(filePath, `pages/${pageID}.json`), { encoding: 'utf8' })
          )
        );
      })
      .then(args => {
        sketch.pages = args.map(str => new Page(null, str));
        return sketch;
      });
  }

  static addPreview(preview) {
    if (!fs.existsSync(preview)) {
      console.warn('Error occurred while adding preview image, please check the file path');
      return;
    }

    fs.ensureDirSync(STORAGE_PREVIEW_DIR);
    fs.copyFileSync(preview, STORAGE_PREVIEW_FILE);
  }

  constructor(args = {}) {
    Object.assign(this, {
      meta: new Meta(args.meta),
      document: new Document(args.document),
      user: new User(args.user),
      pages: [],
      zip: new JSZip(),
    });
    return this;
  }

  getPages(predicate) {
    if (predicate) {
      return this.pages.filter(predicate);
    }
    return this.pages;
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
      style = SharedStyle.LayerStyle(style);
    }

    this.document.addLayerStyle(style);
  }

  addTextStyle(style) {
    if (!(style instanceof SharedStyle)) {
      style = SharedStyle.TextStyle(style);
    }

    this.document.addTextStyle(style);
  }

  getTextStyles() {
    return this.document.getTextStyles();
  }

  addPage(page, args) {
    if (!(page instanceof Page)) {
      page = new Page(page);
    }
    this.document.addPage(page.getID());
    this.meta.addPage(page);
    this.user.addPage(page.getID(), args);
    this.pages = this.pages.concat(page);
    page.getArtboards().forEach(artboard => {
      this.meta.addArtboard(page.getID(), artboard);
    });
  }

  addArtboard(pageID, artboard) {
    if (!(artboard instanceof Artboard)) {
      artboard = new Artboard(artboard);
    }
    const page = this.pages.find(p => p.getID() === pageID);
    page.addArtboard(artboard);
    this.meta.addArtboard(pageID, artboard);
  }

  build(output) {
    this.zip
      .file('meta.json', JSON.stringify(this.meta))
      .file('user.json', JSON.stringify(this.user))
      .file('document.json', JSON.stringify(this.document));
    this.zip.folder('pages');
    this.zip.folder('previews');

    if (fs.existsSync(STORAGE_PREVIEW_FILE))
      this.zip.folder('previews').file('preview.png', fs.readFile(STORAGE_PREVIEW_FILE));

    if (fs.existsSync(STORAGE_IMG_DIR)) {
      fs.readdirSync(STORAGE_IMG_DIR).forEach(file => {
        this.zip.folder('images').file(file, fs.readFile(`${STORAGE_IMG_DIR}/${file}`));
      });
    }
    this.pages.forEach(page => {
      this.zip.file(`pages/${page.do_objectID}.json`, JSON.stringify(page));
    });

    return this.zip.generateAsync({ type: 'nodebuffer', streamFiles: true }).then(buffer => {
      fs.writeFileSync(output, buffer);
      fs.removeSync(STORAGE_DIR);
      return output;
    });
  }
}

module.exports = Sketch;
