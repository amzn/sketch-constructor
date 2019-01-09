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

const uuid = require('uuid-v4');
const SharedStyle = require('../SharedStyle');

class Document {
  static fromJSON(json) {
    return new this(null, json);
  }

  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      // Create nested classes
      this.layerTextStyles.objects = this.layerTextStyles.objects.map(sharedStyle => {
        return new SharedStyle(null, sharedStyle);
      });
      this.layerStyles.objects = this.layerStyles.objects.map(sharedStyle => {
        return new SharedStyle(null, sharedStyle);
      });
    } else {
      const id = args.id || uuid().toUpperCase();

      Object.assign(this, {
        _class: "document",
        do_objectID: id,
        assets: {
          _class: "assetCollection",
          colors: [],
          gradients: [],
          imageCollection: {
            _class: "imageCollection",
            images: {}
          },
          images: []
        },
        colorSpace: 0,
        currentPageIndex: 1,
        foreignLayerStyles: [],
        foreignSymbols: [],
        foreignTextStyles: [],
        layerStyles: {
          _class: "sharedStyleContainer",
          objects: []
        },
        layerSymbols: {
          _class: "symbolContainer",
          objects: []
        },
        layerTextStyles: {
          _class: "sharedTextStyleContainer",
          objects: []
        },
        pages: []
      });
    }
    return this;
  }

  getLayerStyles() {
    return this.layerStyles.objects;
  }

  getLayerStyle(name) {
    return this.layerStyles.objects.find(style => style.name === name);
  }

  addLayerStyle(style) {
    this.layerStyles.objects = this.layerStyles.objects.concat(style);
  }

  getTextStyles() {
    return this.layerTextStyles.objects;
  }

  addTextStyle(style) {
    this.layerTextStyles.objects = this.layerTextStyles.objects.concat(style);
  }

  addPage(pageID) {
    this.pages = this.pages.concat({
      _class: "MSJSONFileReference",
      _ref_class: "MSImmutablePage",
      _ref: `pages/${pageID}`
    })
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Document;