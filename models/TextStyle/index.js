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
const { textAlignmentMap, verticalAlignmentMap } = require('../../utils/maps');

class TextStyle {
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      // Created nested class
      this.encodedAttributes.MSAttributedStringColorAttribute = new Color(null, this.encodedAttributes.MSAttributedStringColorAttribute);
    } else {
      Object.assign(this, {
        _class: "textStyle",
        verticalAlignment: verticalAlignmentMap[args.verticalAlignment || 'top'],
        encodedAttributes: {
          MSAttributedStringFontAttribute: {
            _class: "fontDescriptor",
            attributes: {
              name: args.fontName || "Helvetica",
              size: args.fontSize || 16
            }
          },
          MSAttributedStringColorAttribute: new Color(args.color),
          textStyleVerticalAlignmentKey: 2,
          paragraphStyle: {
            _class: "paragraphStyle",
            alignment: textAlignmentMap[args.alignment || 'left']
          }
        }
      });
    }
  }

  getColor() {
    return this.encodedAttributes.MSAttributedStringColorAttribute;
  }

  getFontSize() {
    return this.encodedAttributes.MSAttributedStringFontAttribute.attributes.size;
  }

  getFontName() {
    return this.encodedAttributes.MSAttributedStringFontAttribute.attributes.name;
  }

  // toString() {
  //   return JSON.stringify(this);
  // }
}

TextStyle.model = {
  _class: "textStyle",
  encodedAttributes: {
    MSAttributedStringFontAttribute: {
      _class: "fontDescriptor",
      attributes: {
        name: "Helvetica",
        size: 36
      }
    },
    MSAttributedStringColorAttribute: Color.model,
    textStyleVerticalAlignmentKey: 0,
    underlineStyle: 0,
    strikethroughStyle: 0,
    paragraphStyle: {
      _class: "paragraphStyle",
      alignment: 0
    }
  },
  verticalAlignment: 0
}

module.exports = TextStyle;