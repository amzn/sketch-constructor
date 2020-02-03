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
const CurvePoint = require('../CurvePoint');
const Rect = require('../Rect');
const Style = require('../Style');

const points = ['{0, 0}', '{1, 0}', '{1, 1}', '{0, 1}'];

const cornerRadius = (radius, index) => {
  if (radius) {
    if (Array.isArray(radius)) {
      return radius[index];
    }
    return radius;
  }
  return 0;
};
/**
 *
 */
class Rectangle extends Layer {
  /**
   * @mixes Layer.Model
   * @property {boolean} edited
   * @property {boolean} isClosed
   * @property {integer} pointRadiusBehaviour
   * @property {String[]} points
   * @property {integer} fixedRadius
   * @property {boolean} hasConvertedToNewRoundCorners
   */
  static get Model() {
    return {
      ...Layer.Model,
      _class: 'rectangle',
      edited: false,
      isClosed: true,
      pointRadiusBehaviour: 1,
      points: [],
      fixedRadius: 0,
      hasConvertedToNewRoundCorners: true,
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String} args.name
   * @param {integer} args.x
   * @param {integer} args.y
   * @param {integer} args.height
   * @param {integer} args.width
   * @param {Object} args.style Passed to {@link LayerStyle}
   * @param {Rectangle.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Rectangle.Model, {
        points:
          args.points ||
          points.map(
            (point, index) =>
              new CurvePoint({
                curveFrom: point,
                curveTo: point,
                cornerRadius: cornerRadius(args.cornerRadius, index),
                point,
              })
          ),
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

module.exports = Rectangle;
