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
const Rect = require('../Rect');
const Base = require('../Base');

class Layer extends Base {
  constructor(args = {}, json) {
    super(args, json);
    if (json) {
      Object.assign(this, json);
    } else {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, {
        do_objectID: id,
        booleanOperation: -1,
        automaticallyDrawOnUnderlyingPath: false,
        dontSynchroniseWithSymbol: false,
        exportOptions: {
          _class: "exportOptions",
          exportFormats: [],
          includedLayerIds: [],
          layerOptions: 0,
          shouldTrim: false
        },

        frame: new Rect( args.frame ),

        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isLocked: false,
        isVisible: true,
        layerListExpandedType: 0,
        layers: [],
        name: args.name || id,
        nameIsFixed: false,
        resizingConstraint: 47,
        resizingType: 0,
        rotation: 0,
        shouldBreakMaskChain: false,
        userInfo: {},
      })
    }

    return this;
  }

  addLayer(layer) {
    // Create a new Layer class unless it is already one
    layer = layer instanceof Layer ? layer : new Layer(layer);
    this.layers = this.layers.concat(layer);
    return this;
  }

  getGroup(id) {

  }

  getGroups() {
    return this.layers.filter(layer => layer._class === 'group');
  }

  getLayers(predicate) {
    return this.layers.filter(predicate);
  }

  getID() { return this.do_objectID; }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Layer;