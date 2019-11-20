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
const ParagraphStyle = require('../ParagraphStyle');
const { verticalAlignmentMap } = require('../../utils/maps');

/**
 * TextStyle
 * A TextStyle is applied to a Text layer.
 */
class TextStyle {
  static get Model() {
    return {
      _class: 'textStyle',
      encodedAttributes: {
        MSAttributedStringFontAttribute: {
          _class: 'fontDescriptor',
          attributes: {
            name: 'Helvetica',
            size: 36,
          },
        },
        MSAttributedStringColorAttribute: Color.Model,
        textStyleVerticalAlignmentKey: 0,
        underlineStyle: 0,
        strikethroughStyle: 0,
        paragraphStyle: ParagraphStyle.Model,
      },
      verticalAlignment: 0,
      kerning: 0,
    };
  }

  /**
   *
   * @param {Object} [args] - Configuration when creating a TextStyle programmatically.
   * @param {Object} [json] - Raw JSON object when this class is instantiated from a Sketch document.
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      // Created nested class
      this.encodedAttributes.MSAttributedStringColorAttribute = new Color(
        null,
        this.encodedAttributes.MSAttributedStringColorAttribute
      );
    } else {
      Object.assign(this, {
        _class: 'textStyle',
        verticalAlignment: verticalAlignmentMap[args.verticalAlignment || 'top'],
        encodedAttributes: {
          MSAttributedStringFontAttribute: {
            _class: 'fontDescriptor',
            attributes: {
              name: args.fontName || 'Helvetica',
              size: args.fontSize || 16,
            },
          },
          MSAttributedStringColorAttribute: new Color(args.color),
          textStyleVerticalAlignmentKey: 2,
          paragraphStyle: new ParagraphStyle(args),
        },
      });
      if (args.lineHeight) {
        this.encodedAttributes.paragraphStyle.minimumLineHeight = args.lineHeight;
        this.encodedAttributes.paragraphStyle.maximumLineHeight = args.lineHeight;
      }
      if (args.kerning) {
        this.encodedAttributes.kerning = args.kerning;
      }
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

  getLineHeight() {
    return this.encodedAttributes.paragraphStyle.minimumLineHeight;
  }

  getKerning() {
    return this.encodedAttributes.kerning;
  }
}

module.exports = TextStyle;
