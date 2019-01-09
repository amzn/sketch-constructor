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

const ExportOptions = require('../ExportOptions');
const Rect = require('../Rect');
const Style = require('../Style');

class Base {
  constructor(args, json) {
    // If we are building a layer from raw JSON
    // go over the child layers and try to map them to
    // classes.
    if (json) {
      Object.assign(this, json, {
        layers: json.layers.map( require('../../utils/layerToClass') )
      });
    }
  }

  addLayer(layer) {
    // Create a new Layer class unless it is already one
    // layer = layer instanceof Base ? layer : new Layer(layer);
    this.layers = this.layers.concat(layer);
    return this;
  }

  setSharedStyle(style) {
    this.style = style.value;
    this.sharedStyleID = style.do_objectID;
  }

  getGroup(id) {

  }

  getGroups() {
    return this.layers.filter(layer => layer._class === 'group');
  }

  getLayers(predicate) {
    if (predicate) {
      return this.layers.filter(predicate);
    } else {
      return this.layers;
    }
  }

  getID() { return this.do_objectID; }

  toString() {
    return JSON.stringify(this);
  }
}

Base.model = {
  _class: "",
  do_objectID: "",
  booleanOperation: -1,
  exportOptions: ExportOptions.model,
  frame: Rect.model,
  isFixedToViewport: false,
  isFlippedHorizontal: false,
  isFlippedVertical: false,
  isLocked: false,
  isVisible: true,
  layerListExpandedType: 0,
  name: "",
  nameIsFixed: false,
  resizingConstraint: 47,
  resizingType: 0,
  rotation: 0,
  shouldBreakMaskChain: false,
  style: Style.model,
}

module.exports = Base;