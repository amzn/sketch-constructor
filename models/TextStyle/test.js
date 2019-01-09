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

const TextStyle = require('./index');
const Color = require('../Color');

const json = {
  "_class": "textStyle",
  "encodedAttributes": {
    "underlineStyle": 1,
    "paragraphStyle": {
      "_class": "paragraphStyle",
      "alignment": 1
    },
    "strikethroughStyle": 0,
    "MSAttributedStringFontAttribute": {
      "_class": "fontDescriptor",
      "attributes": {
        "name": "Helvetica",
        "size": 36
      }
    },
    "textStyleVerticalAlignmentKey": 0,
    "MSAttributedStringColorAttribute": {
      "_class": "color",
      "alpha": 1,
      "blue": 0.2588235294117647,
      "green": 0.2235294117647059,
      "red": 0.1882352941176471
    }
  },
  "verticalAlignment": 0
}

describe('TextStyle', () => {

  it('should work from raw JSON', () => {
    let textStyle = new TextStyle(null, json);
    expect(textStyle).toBeDefined();
  });

  it('should generate nested classes from raw JSON', () => {
    let textStyle = new TextStyle(null, json);
    expect(
      textStyle.encodedAttributes.MSAttributedStringColorAttribute instanceof Color
    ).toBeTruthy();
  })

  it('should work with no args', () => {
    let textStyle = new TextStyle();
    expect(textStyle).toBeDefined();
  });

  it('getFontSize should work', () => {
    let textStyle = new TextStyle({
      fontSize: 16
    });
    expect(textStyle.getFontSize()).toEqual(16);
  });

  it('getFontName should work', () => {
    let textStyle = new TextStyle({
      fontName: 'OpenSans'
    });
    expect(textStyle.getFontName()).toEqual('OpenSans');
  });
});