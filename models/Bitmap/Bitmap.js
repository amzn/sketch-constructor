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
const Layer = require('../Layer');
const Rect = require('../Rect');
const Style = require('../Style');

/**
 * A bitmap layer is used for images
 * @extends Layer
 *
 */
class Bitmap extends Layer {
  /**
   *
   * @param {Object} args
   * @param {String} args.image The path of the image
   * @param {Object} args.frame Sent to {@link Rect}
   * @param {Object} args.style Sent to {@link Style}
   * @param {Bitmap.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Bitmap.Model, {
        do_objectID: id,
        name: args.name || id,
        frame: new Rect(args.frame),
        style: new Style(args.style),
        layers: args.layers || [],
      });
    }

    return this;
  }
}

/**
 * @mixes Layer.Model
 */
Bitmap.Model = Object.assign({}, Bitmap.Model, {
  _class: 'bitmap',
  fillReplacesImage: false,
  hasClippingMask: false,
  intendedDPI: 72,
  layerListExpandedType: 0,
  resizingConstraint: 63,
  resizingType: 0,
  rotation: 0,
  shouldBreakMaskChain: false,
  image: {
    _class: 'MSJSONFileReference',
    _ref_class: 'MSImageData',
    _ref: '',
  },
});

module.exports = Bitmap;
