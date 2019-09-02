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

/**
 * @external TinyColor
 * @see {@link https://www.npmjs.com/package/tinycolor2}
 */
const TinyColor = require('tinycolor2');

/**
 * Color class
 * @mixes TinyColor
 */
class Color {
  /**
   * @property {float} alpha 0-1
   * @property {float} blue 0-1
   * @property {float} green 0-1
   * @property {float} red 0-1
   */
  static get Model() {
    return {
      _class: 'color',
      alpha: 1,
      blue: 0,
      green: 0,
      red: 0,
    };
  }

  /**
   *
   * @param {String|Object} args This is passed to tinycolor 2. As long as tinycolor2 can understand this argument, the color will work.
   * @param {Color.Model} json
   */
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      const color = TinyColor(args || '#000').toRgb();
      Object.assign(this, Color.Model, {
        alpha: color.a,
        blue: color.b / 255,
        green: color.g / 255,
        red: color.r / 255,
      });
    }
    // Map all tinycolor's methods
    // TODO: should check if this will cause performance issues
    Object.keys(TinyColor.prototype).forEach(key => {
      this[key] = arg => {
        const ret = this._getTinyColor()[key](arg);
        // If the return value is a TinyColor class,
        // it is modifying the value
        if (ret instanceof TinyColor) {
          return this.set(ret);
        }
        return ret;
      };
    });

    return this;
  }

  /**
   * Set/update the color
   * @param {String|Object} tinyColor Setting the color, basically the same as instantiating a new Color class.
   * @returns {this} Returns this for chaining
   */
  set(tinyColor) {
    const rgb = tinyColor.toRgb();
    Object.assign(this, {
      alpha: rgb.a,
      blue: rgb.b / 255,
      green: rgb.g / 255,
      red: rgb.r / 255,
    });
    return this;
  }

  /**
   * @returns {TinyColor}
   */
  _getTinyColor() {
    return TinyColor({
      r: Math.round(this.red * 255),
      g: Math.round(this.green * 255),
      b: Math.round(this.blue * 255),
      a: this.alpha,
    });
  }
}

module.exports = Color;
