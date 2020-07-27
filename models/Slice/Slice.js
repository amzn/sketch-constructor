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
const Color = require('../Color');
const Style = require('../Style');
const Rect = require('../Rect');
const ExportOptions = require('../ExportOptions');

class Slice {
  static get Model() {
    return {
      _class: 'slice',
      booleanOperation: -1,
      isFixedToViewport: false,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isLocked: false,
      isVisible: true,
      layerListExpandedType: 1,
      nameIsFixed: false,
      resizingConstraint: 63,
      resizingType: 0,
      rotation: 0,
      shouldBreakMaskChain: false,
      hasBackgroundColor: false,
    };
  }

  /**
   * @param {Object} args
   * @param {Object} json
   */
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
      this.exportOptions = new ExportOptions(null, json.exportOptions);
      this.frame = new Rect(null, json.frame);
      this.style = new Style(null, json.style);
      this.backgroundColor = new Color(null, json.backgroundColor);
    }
    if (args) {
      const id = args.id || uuid().toUpperCase();

      Object.assign(this, {
        ...Slice.Model,
        ...args,
        name: args.name || id,
        do_objectID: id,
        exportOptions: new ExportOptions(args.exportOptions),
        frame: new Rect(args.frame),
        style: new Style(args.style),
        backgroundColor: new Color(args.color),
      });
    }
  }

  static fromJSON(json) {
    return new Slice(null, json);
  }
}

module.exports = Slice;
