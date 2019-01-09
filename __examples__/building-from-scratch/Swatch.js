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

const { Group, Text, ShapeGroup } = require('sketch-constructor');

class Swatch extends Group {
  constructor(args) {
    super({ frame: args.frame });
    const swatchColor = ShapeGroup.Rectangle({
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      name: args.value,
      style: {
        fills: [{
          color: args.value
        }]
      }
    });

    const swatchLabel = new Text({
      string: args.label,
      name: args.label,
      fontSize: 24,
      color: "#ccc",
      frame: {
        width: 200,
        height: 50,
        x: 0,
        y: 120,
      }
    });

    Object.assign(this, {
      layers: [
        swatchColor,
        swatchLabel
      ],
      name: args.label
    });
  }
}

module.exports = Swatch;