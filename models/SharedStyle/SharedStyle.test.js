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

const SharedStyle = require('./index');

const json = {};

describe('SharedStyle', () => {
  it('should work from raw JSON', () => {
    expect(true).toBeTruthy();
  });

  it('should work', () => {
    const sharedStyle = new SharedStyle({
      name: 'foo',
    });
    expect(sharedStyle.name).toEqual('foo');
  });

  describe('LayerStyle', () => {
    it('should work', () => {
      const layerStyle = SharedStyle.LayerStyle({
        name: 'test',
        fills: [
          {
            color: '#ff0000',
          },
        ],
      });
      expect(layerStyle.value.fills[0].color.red).toEqual(1);
    });
  });

  describe('TextStyle', () => {
    it('should work', () => {
      const textStyle = SharedStyle.TextStyle({
        name: 'test',
        textStyle: {
          fontName: 'Arial',
          fontSize: 10,
        },
      });
      expect(textStyle.value.textStyle.encodedAttributes.MSAttributedStringFontAttribute.attributes).toEqual({
        name: 'Arial',
        size: 10,
      });
    });
  });
});
