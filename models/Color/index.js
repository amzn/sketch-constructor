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

const TinyColor = require('tinycolor2');

class Color {
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      const color = TinyColor( args || "#000" ).toRgb();
      Object.assign(this, Color.model, {
        alpha: color.a,
        blue: color.b / 255,
        green: color.g / 255,
        red: color.r / 255
      });
    }
    // Map all tinycolor's methods
    // TODO: should check if this will cause performance issues
    for (const key in TinyColor.prototype) {
      if (TinyColor.prototype.hasOwnProperty(key)) {
        this[key] = (args) => {
          let ret = this._getTinyColor()[key](args);
          // If the return value is a TinyColor class,
          // it is modifying the value
          if (ret instanceof TinyColor) {
            return this.set(ret);
          } else {
            return ret;
          }
        }
      }
    }
    return this;
  }

  set(tinyColor) {
    let rgb = tinyColor.toRgb();
    Object.assign(this, {
      alpha: rgb.a,
      blue: rgb.b / 255,
      green: rgb.g / 255,
      red: rgb.r / 255
    });
    return this;
  }

  _getTinyColor() {
    return TinyColor({
      r: Math.round(this.red * 255),
      g: Math.round(this.green * 255),
      b: Math.round(this.blue * 255),
      a: this.alpha,
    })
  }
}

Color.model = {
  _class: "color",
  alpha: 1,
  blue: 0,
  green: 0,
  red: 0
}

module.exports = Color;