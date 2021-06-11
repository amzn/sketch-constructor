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
const { Swatch } = require('../index');

const json = {
  _class: 'color',
  alpha: 1,
  blue: 0.592,
  green: 0.592,
  red: 0.592,
};

describe('Color', () => {
  it('should work from raw JSON', () => {
    const color = new Color(null, json);
    expect(color).toBeDefined();
  });

  it('should work being user generated', () => {
    const color = new Color('#fff');
    expect(color).toBeDefined();
  });

  it('should have tinycolor methods', () => {
    const color = new Color('#fff');
    expect(color.toHexString()).toEqual('#ffffff');
  });

  it('should be able to be modified with tinycolor methods', () => {
    const color = new Color('#000');
    color.lighten(100);
    expect(color.toHexString()).toEqual('#ffffff');
  });

  it('shoud accept swatchID as property along with color components', () => {
    const swatchID = '6D02695C-C1FF-471B-9948-A13985E7618E';
    const alpha = 0.77;
    const color = new Color({ swatchID, r: 1, g: 0, b: 0, a: alpha });
    expect(color.swatchID).toEqual(swatchID);
    expect(color.alpha).toEqual(alpha);
    expect(color.blue).toEqual(0);
  });

  it('should accept result of swatch.asColor()', () => {
    const swatch = new Swatch({ color: new Color('purple') });
    const refColor = swatch.asColor();
    const color = new Color(refColor);
    expect(color.swatchID).toEqual(swatch.do_objectID);
    expect(color.red).toEqual(refColor.r / 255);
  });
});
