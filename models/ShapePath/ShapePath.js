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
 *
 */
class ShapePath extends Layer {
  /**
   *
   * @param {Object} args
   * @param {String} args.name
   * @param {integer} args.x
   * @param {integer} args.y
   * @param {integer} args.height
   * @param {integer} args.width
   * @param {Array.<CurvePoint>} args.points
   * @param {Object} args.style Passed to {@link LayerStyle}
   * @param {ShapePath.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, ShapePath.Model, {
        points: args.points || [],
        do_objectID: id,
        frame: new Rect({
          x: args.x,
          y: args.y,
          width: args.width,
          height: args.height,
        }),
        style: new Style(args.style),
        name: args.name || id,
      });
    }
  }
}

/**
 * @mixes Layer.Model
 * @property {boolean} edited
 * @property {boolean} isClosed
 * @property {integer} pointRadiusBehaviour
 * @property {String[]} points
 */
ShapePath.Model = Object.assign({}, Layer.Model, {
  _class: 'shapePath',
  edited: true,
  isClosed: false,
  pointRadiusBehaviour: 1,
  points: [],
});

module.exports = ShapePath;
