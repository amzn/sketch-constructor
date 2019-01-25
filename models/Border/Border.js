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
const Fill = require('../Fill');

/**
 * Border class
 */
class Border {
  /**
   *
   * @param {Object} args
   * @param {Object|String} args.color Sent to {@link Color}
   * @param {Fill.FillType} args.fillType
   * @param {Border.Position} args.position
   * @param {integer} args.thickness
   * @param {Border.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, {
        _class: "border",
        // Default is true, but can be explicitly set to false
        isEnabled: args.isEnabled !== false,
        color: new Color(args.color),
        fillType: Fill.FillType[args.fillType || 'Color'],
        position: Border.Position[args.position || 'Center'],
        thickness: args.thickness || 1
      });
    }
    return this;
  }
}

/**
 *
 * @enum {integer}
 */
Border.Position = {
  Inside: 1,
  Center: 0,
  Outside: 2
}

/**
 * @property {boolean} isEnabled
 * @property {Color.Model} color
 * @property {Fill.FillType} fillType
 * @property {Border.position} position
 * @property {integer} thickness
 */
Border.Model = {
  _class: "border",
  isEnabled: false,
  color: Color.Model,
  fillType: 0,
  position: 0,
  thickness: 0
}

module.exports = Border;