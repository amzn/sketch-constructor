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

/**
 * Gradient
 */
class Gradient {
  static get Model() {
    return {
      _class: 'gradient',
      elipseLength: 0,
      from: '{0.5, 0}',
      to: '{0.5, 1}',
      gradientType: 1,
      stops: [],
    };
  }

  /**
   *
   * @param {Object} args
   * @param {Gradient.Model} json
   */
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, Gradient.Model, args);
    }
  }
}

Gradient.GradientStop = {
  _class: 'gradientStop',
  color: Color.Model,
  position: 0,
};

Gradient.GradientType = {
  Linear: 0,
  Radial: 1,
  Angular: 2,
};

module.exports = Gradient;
