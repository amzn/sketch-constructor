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
const Base = require('../Base');
const Style = require('../Style');

class Page extends Base {
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = uuid().toUpperCase();
      Object.assign(this, {
        _class: "page",
        do_objectID: id,
        booleanOperation: -1,
        exportOptions: {
          _class: "exportOptions",
          exportFormats: [],
          includedLayerIds: [],
          layerOptions: 0,
          shouldTrim: false
        },
        frame: {
          _class: "rect",
          constrainProportions: false,
          height: 0,
          width: 0,
          x: 0,
          y: 0
        },
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isLocked: false,
        isVisible: true,
        layerListExpandedType: 0,
        name: args.name || id,
        nameIsFixed: false,
        resizingConstraint: 63,
        resizingType: 0,
        rotation: 0,
        shouldBreakMaskChain: false,
        style: new Style(args.style),
        hasClickThrough: true,
        layers: []
      });
    }
  }

  getID() { return this.do_objectID; }

  getArtboards(predicate) {
    const arr = this.layers.filter(layer => layer._class === 'artboard')
    if (predicate) {
      return arr.filter(predicate);
    } else {
      return arr;
    }
  }

  getArtboard(name) {
    return this.getArtboards().find(artboard => artboard.name === name);
  }

  addArtboard(artboard) {
    this.layers = this.layers.concat( artboard );
    return this;
  }
}

module.exports = Page;