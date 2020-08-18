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

const GraphicsContextSettings = require('./index');
const json = require('./__GraphicsContextSettings.json');

describe('GraphicsContextSettings', () => {
  it('should work from raw JSON', () => {
    const graphicsContextSettings = new GraphicsContextSettings(null, json);
    expect(JSON.stringify(json, null, 2)).toEqual(JSON.stringify(graphicsContextSettings, null, 2));
  });

  it('should correctly handle opacity = 0', () => {
    const graphicsContextSettings = new GraphicsContextSettings({
      opacity: 0,
    });

    expect(graphicsContextSettings.opacity).toBe(0);
  });
});
