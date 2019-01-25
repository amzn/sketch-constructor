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
 * Border options
 */
class BorderOptions {
  /**
   *
   * @param {Object} [args]
   * @param {integer[]} args.dashPattern
   * @param {BorderOptions.LineCapStyle} args.lineCapStyle
   * @param {BorderOptions.LineJoinStyle} args.lineJoinStyle
   * @param {BorderOptions.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, BorderOptions.Model, {
        dashPattern: args.dashPattern,
        lineCapStyle: BorderOptions.LineCapStyle[args.lineCapStyle || 'butt'],
        lineJoinStyle: BorderOptions.LineJoinStyle[args.lineCapStyle || 'miter'],
      });
    }
  }
}

/**
 * @enum
 */
BorderOptions.LineCapStyle = {
  butt: 0,
  round: 1,
  projecting: 2,
};

/**
 * @enum
 */
BorderOptions.LineJoinStyle = {
  miter: 0,
  round: 1,
  bevel: 2,
};

/**
 * @property {boolean} isEnabled
 * @property {integer[]} dashPattern
 * @property {BorderOptions.LineCapStyle} lineCapStyle
 * @property {BorderOptions.LineJoinStyle} lineJoinStyle
 */
BorderOptions.Model = {
  _class: 'borderOptions',
  isEnabled: false,
  dashPattern: [],
  lineCapStyle: 1,
  lineJoinStyle: 1,
};

module.exports = BorderOptions;
