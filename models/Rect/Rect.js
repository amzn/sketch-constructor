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
 * A Rect is a lower-level class used to define the frame of a layer. Don't use this
 * if you mean to use a Rectangle instead!
 */
class Rect {
  /**
   * Underlying JSON object structure in a Sketch document
   * @property {boolean} constrainProportions
   * @property {integer} height
   * @property {integer} width
   * @property {integer} x
   * @property {integer} y
   */
  static get Model() {
    return {
      _class: 'rect',
      constrainProportions: false,
      height: 100,
      width: 100,
      x: 0,
      y: 0,
    };
  }

  /**
   *
   * @param {Rect.Model} args
   * @param {Rect.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, Rect.Model, args);
    }
  }
}

module.exports = Rect;
