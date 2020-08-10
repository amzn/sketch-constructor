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

const { blendModeMap } = require('../../utils/maps');

/**
 * Options for exporting an artboard
 */
class GraphicsContextSettings {
  /**
   * @property {integer} blendMode
   * @property {float} opacity
   */
  static get Model() {
    return {
      _class: 'graphicsContextSettings',
      blendMode: 0,
      opacity: 1,
    };
  }

  /**
   *
   * @param {GraphicsContextSettings.Model} args
   * @param {GraphicsContextSettings.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, GraphicsContextSettings.Model, args, {
        blendMode: blendModeMap[args.blendMode || 'normal'],
        opacity: Number.isFinite(args.opacity) ? args.opacity : 1,
      });
    }
    return this;
  }
}

module.exports = GraphicsContextSettings;
