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

/**
 * CurvePoints are used to create Shapes
 */
class CurvePoint {
  /**
   *
   * @param {CurvePoint.Model} args
   * @param {CurvePoint.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, deepcopy(CurvePoint.Model), args);
    }
  }
}

/**
 * @property {integer} cornerRadius
 * @property {String} curveFrom "{0,0}"
 * @property {String} curveTo "{0,0}"
 * @property {String} point "{0,0}"
 * @property {integer} curveMode
 * @property {boolean} hasCurveFrom
 * @property {boolean} hasCurveTo
 */
CurvePoint.Model = {
  _class: 'curvePoint',
  cornerRadius: 0,
  curveFrom: '{0, 0}',
  curveMode: 1,
  curveTo: '{0, 0}',
  hasCurveFrom: false,
  hasCurveTo: false,
  point: '{0, 0}',
};

module.exports = CurvePoint;
