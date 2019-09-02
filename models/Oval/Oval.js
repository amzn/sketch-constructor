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

const points = ['{0.5, 1}', '{1, 0.5}', '{0.5, 0}', '{0, 0.5}'];
const pointsFrom = [
  '{0.77614237490000004, 1}',
  '{1, 0.22385762510000001}',
  '{0.22385762510000001, 0}',
  '{0, 0.77614237490000004}',
];
const pointsTo = [
  '{0.22385762510000001, 1}',
  '{1, 0.77614237490000004}',
  '{0.77614237490000004, 0}',
  '{0, 0.22385762510000001}',
];

/**
 *
 */
class Oval extends Layer {
  /**
   * @mixes Layer.Model
   * @property {boolean} edited
   * @property {boolean} isClosed
   * @property {integer} pointRadiusBehaviour
   * @property {String[]} points
   */
  static get Model() {
    return Object.assign({}, Layer.Model, {
      _class: 'oval',
      edited: false,
      isClosed: true,
      pointRadiusBehaviour: 1,
      points: [],
    });
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
   * @param {Oval.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Oval.Model, {
        points: points.map(
          (point, index) =>
            new CurvePoint({
              point,
              curveFrom: pointsFrom[index],
              curveTo: pointsTo[index],
              curveMode: 2,
              hasCurveFrom: true,
              hasCurveTo: true,
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

module.exports = Oval;
