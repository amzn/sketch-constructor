/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
const GraphicsContextSettings = require('../GraphicsContextSettings');

class InnerShadow {
  static get Model() {
    return {
      _class: 'innerShadow',
      isEnabled: true,
      blurRadius: 3,
      color: Color.Model,
      contextSettings: GraphicsContextSettings.Model,
      offsetX: 0,
      offsetY: 1,
      spread: 0,
    };
  }

  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, InnerShadow.Model, args, {
        color: new Color(args.color),
      });
    }
  }
}

module.exports = InnerShadow;
