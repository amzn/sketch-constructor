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

const deepcopy = require('deepcopy');
const uuid = require('uuid-v4');
const Layer = require('../Layer');
const Rectangle = require('../Rectangle');
const ShapePath = require('../ShapePath');
const Oval = require('../Oval');
const Rect = require('../Rect');
const Style = require('../Style');

class ShapeGroup extends Layer {
  constructor(args, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, deepcopy(ShapeGroup.Model), {
        do_objectID: id,
        name: args.name || id,
        style: args.style ? Style.LayerStyle(args.style) : null,
        layers: args.layers || [],
        frame: new Rect(args.frame),
      });
    }
  }

  static Rectangle(args) {
    return new this({
      name: args.name,
      id: args.id,
      style: args.style,
      frame: {
        x: args.x,
        y: args.y,
        width: args.width,
        height: args.height,
      },
      layers: [
        new Rectangle({
          x: 0,
          y: 0,
          width: args.width,
          height: args.height,
        }),
      ],
    });
  }

  static Oval(args) {
    return new this({
      name: args.name,
      id: args.id,
      style: args.style,
      frame: {
        x: args.x,
        y: args.y,
        width: args.width,
        height: args.height,
      },
      layers: [
        new Oval({
          x: 0,
          y: 0,
          width: args.width,
          height: args.height,
        }),
      ],
    });
  }

  static ShapePath(args) {
    return new this({
      name: args.name,
      id: args.id,
      style: args.style,
      frame: {
        x: args.x,
        y: args.y,
        width: args.width,
        height: args.height,
      },
      layers: [
        new ShapePath({
          x: 0,
          y: 0,
          width: args.width,
          height: args.height,
          points: args.points,
        }),
      ],
    });
  }
}

ShapeGroup.Model = Object.assign({}, Layer.Model, {
  _class: 'shapeGroup',
  layerListExpandedType: 1,
  clippingMaskMode: 0,
  hasClippingMask: false,
  windingRule: 1,
});

module.exports = ShapeGroup;
