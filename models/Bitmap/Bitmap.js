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
const fs = require('fs-extra');
const crypto = require('crypto');
const Layer = require('../Layer');
const Rect = require('../Rect');
const Style = require('../Style');
const { STORAGE_DIR, STORAGE_IMG_DIR } = require('../../utils/paths');

/**
 * A bitmap layer is used for images
 * Currently supported file types: PNG
 * @extends Layer
 *
 */
class Bitmap extends Layer {
  /**
   * @mixes Layer.Model
   * @property {boolean} fillReplacesImage
   * @property {boolean} hasClippingMask
   * @property {integer} intendedDPI
   * @property {integer} layerListExpandedType
   * @property {integer} resizingType
   * @property {float} rotation
   * @property {boolean} shouldBreakMaskChain
   * @property {Object} image
   */
  static get Model() {
    return {
      ...Layer.Model,
      _class: 'bitmap',
      fillReplacesImage: false,
      hasClippingMask: false,
      intendedDPI: 72,
      layerListExpandedType: 0,
      resizingType: 0,
      rotation: 0,
      shouldBreakMaskChain: false,
      image: {
        _class: 'MSJSONFileReference',
        _ref_class: 'MSImageData',
        _ref: '',
      },
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String} args.filePath Local path of the image in PNG format
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
      const fileHash = crypto.createHash('sha1').update(args.filePath).digest('hex');
      this.image._ref = `images/${fileHash}.png`;
      fs.ensureDirSync(STORAGE_IMG_DIR);
      fs.copyFileSync(args.filePath, `${STORAGE_DIR}/${this.image._ref}`);
    }

    return this;
  }
}

module.exports = Bitmap;
