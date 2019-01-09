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

const Base = require('../Base');
const CurvePoint = require('../CurvePoint');
const Rect = require('../Rect');
const Style = require('../Style');
const uuid = require('uuid-v4');

const points = ["{0, 0}", "{1, 0}", "{1, 1}", "{0, 1}"];

class Rectangle extends Base {
  constructor(args, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Rectangle.model, {
        points: points.map(point => new CurvePoint({
          curveFrom: point,
          curveTo: point,
          point: point
        })),
        do_objectID: id,
        frame: new Rect({
          x: args.x,
          y: args.y,
          width: args.width,
          height: args.height
        }),
        style: Style.LayerStyle(args.style),
        name: args.name || id
      })
    }
  }
}

Rectangle.model = Object.assign({}, Base.model, {
  _class: 'rectangle',
  edited: false,
  isClosed: true,
  pointRadiusBehaviour: 1,
  points: [],
  fixedRadius: 0,
  hasConvertedToNewRoundCorners: true
});

module.exports = Rectangle;