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

const Color = require('./index');

const json = {
  "_class": "color",
  "alpha": 1,
  "blue": 0.592,
  "green": 0.592,
  "red": 0.592
}

describe('Color', () => {

  it('should work from raw JSON', () => {
    let color = new Color(null, json);
    expect(color).toBeDefined();
  });

  it('should work being user generated', () => {
    let color = new Color('#fff');
    expect(color).toBeDefined();
  });

  it('should have tinycolor methods', () => {
    let color = new Color('#fff');
    expect(color.toHexString()).toEqual('#ffffff');
  });

  it('should be able to be modified with tinycolor methods', () => {
    let color = new Color('#000');
    color.lighten(100);
    expect(color.toHexString()).toEqual('#ffffff');
  })
});