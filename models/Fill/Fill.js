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

const Color = require('../Color');
const Gradient = require('../Gradient');
const GraphicsContextSettings = require('../GraphicsContextSettings');

/**
 *
 */
class Fill {
  /**
   * @property {boolean} isEnabled
   * @property {Color.Model} color
   * @property {Fill.FillType} fillType
   * @property {integer} noiseIndex
   * @property {integer} noiseIntensity
   * @property {integer} patternFillType
   * @property {integer} patternTileScale
   * @property {GraphicsContextSettings.Model} contextSettings
   */
  static get Model() {
    return {
      _class: 'fill',
      isEnabled: false,
      color: Color.Model,
      fillType: 0,
      noiseIndex: 0,
      noiseIntensity: 0,
      patternFillType: 0,
      patternTileScale: 1,
      gradient: Gradient.Model,
      contextSettings: GraphicsContextSettings.Model,
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String|Object} args.color Passed to {@link Color} constructor
   * @param {float|Object} args.opacity Passed to {@link GraphicsContextSettings} constructor
   * @param {Fill.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      // Map subclasses
      if (this.gradient) {
        this.gradient = new Gradient(null, this.gradient);
      }
      if (this.color) {
        this.color = new Color(null, this.color);
      }
    } else {
      Object.assign(this, {
        _class: 'fill',
        // Default is true, but can be explicitly set to false
        isEnabled: args.isEnabled !== false,
        color: new Color(args.color),
        fillType: Fill.FillType[args.fillType || 'Color'],
        noiseIndex: args.noiseIndex || 0,
        noiseIntensity: args.noiseIntensity || 0,
        patternFillType: args.patternFillType || 0,
        patternTileScale: args.patternTileScale || 1,
        gradient: args.gradient ? new Gradient(args.gradient) : undefined,
        contextSettings: new GraphicsContextSettings({ opacity: args.opacity }),
      });
    }
    return this;
  }
}

/**
 * @enum
 */
Fill.FillType = {
  Color: 0, // A solid fill/border.
  Gradient: 1, // A gradient fill/border.
  Pattern: 4, // A pattern fill/border.
  Noise: 5, // A noise fill/border.
};

module.exports = Fill;
