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
const TextStyle = require('../TextStyle');
const Fill = require('../Fill');
const Blur = require('../Blur');
const Border = require('../Border');
const Shadow = require('../Shadow');
const InnerShadow = require('../InnerShadow');
const GraphicsContextSettings = require('../GraphicsContextSettings');

/**
 *
 */
class Style {
  /**
   * @property {Style.MarkerType} startMarkerType
   * @property {Style.MarkerType} endMarkerType
   * @property {Border.Model[]} border
   * @property {Fill.Model[]} fills
   * @property {Shadow.Model[]} shadows
   * @property {InnerShadow.Model[]} innerShadows
   * @property {TextStyle.Model} textStyle
   * @property {GraphicsContextSettings.Model} contextSettings
   */
  static get Model() {
    return {
      _class: 'style',
      do_objectID: '',
      startMarkerType: 0,
      endMarkerType: 0,
      miterLimit: 10,
      windingRule: 0,
      borders: [],
      fills: [],
      shadows: [],
      innerShadows: [],
      contextSettings: GraphicsContextSettings.Model,
    };
  }

  static LayerStyle(args = {}) {
    const id = args.id || uuid().toUpperCase();
    return new Style({
      id,
      fills: (args.fills || []).map((fill) => new Fill(fill)),
      borders: (args.borders || []).map((border) => new Border(border)),
    });
  }

  static TextStyle(args = {}) {
    const id = args.id || uuid().toUpperCase();
    return new Style({
      id,
      textStyle: new TextStyle(Object.assign(args, { id })),
    });
  }

  /**
   *
   * @param {Object} args
   * @param {Object[]} args.fills Sent to {@link Fill}
   * @param {Object[]} args.borders Sent to {@link Border}
   * @param {Object[]} args.shadows Sent to {@link Shadow}
   * @param {Object[]} args.innerShadows Sent to {@link InnerShadow}
   * @param {Object} args.textStyle Sent to {@link TextStyle}
   * @param {Blur} args.blur Sent to {@link Blur}
   * @param {Style.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      if (this.textStyle) this.textStyle = new TextStyle(null, this.textStyle);
      if (this.fills) this.fills = this.fills.map((fill) => new Fill(null, fill));
      if (this.borders) this.borders = this.borders.map((border) => new Border(null, border));
      if (this.shadows) this.shadows = this.shadows.map((shadow) => new Shadow(null, shadow));
      if (this.innerShadows)
        this.innerShadows = this.innerShadows.map((innerShadow) => new InnerShadow(null, innerShadow));
      if (this.blur) this.blur = new Blur(this.blur);
    } else {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Style.Model, {
        do_objectID: id,
        borders: (args.borders || []).map((border) => new Border(border)),
        fills: (args.fills || []).map((fill) => new Fill(fill)),
        shadows: (args.shadows || []).map((shadow) => new Shadow(shadow)),
        innerShadows: (args.innerShadows || []).map((innerShadow) => new InnerShadow(innerShadow)),
        ...(args.textStyle ? { textStyle: new TextStyle(args.textStyle) } : {}),
        ...(args.blur ? { blur: new Blur(args.blur) } : {}),
      });
    }
  }
}

/**
 * @enum {integer}
 */
Style.MarkerType = {
  none: 0,
  openArrow: 1,
  filledArrow: 2,
  line: 3,
  openCircle: 4,
  filledCircle: 5,
  openSquare: 6,
  filledSquare: 7,
};

/**
 * @enum {integer}
 */
Style.WindingRule = {};

/**
 * @enum {integer}
 */
Style.BlendMode = {
  Normal: 0,
  Darken: 1,
  Multiply: 2,
  ColorBurn: 3,
  Lighten: 4,
  Screen: 5,
  ColorDodge: 6,
  Overlay: 7,
  SoftLight: 8,
  HardLight: 9,
  Difference: 10,
  Exclusion: 11,
  Hue: 12,
  Saturation: 13,
  Color: 14,
  Luminosity: 15,
};

module.exports = Style;
