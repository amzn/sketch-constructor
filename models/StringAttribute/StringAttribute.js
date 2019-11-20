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
const { verticalAlignmentMap, textTransformMap } = require('../../utils/maps');

class StringAttribute {
  static get Model() {
    return {
      _class: 'stringAttribute',
      location: 0,
      length: 1,
      attributes: {
        MSAttributedStringTextTransformAttribute: 1,
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
    };
  }

  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, StringAttribute.Model, {
        location: args.location || 0,
        length: args.length || 0,
        attributes: {
          MSAttributedStringFontAttribute: {
            _class: 'fontDescriptor',
            attributes: {
              name: args.fontName || 'Helvetica',
              size: args.fontSize || 16,
            },
          },
          MSAttributedStringTextTransformAttribute: textTransformMap[args.textTransform || 'none'],
          MSAttributedStringColorAttribute: new Color(args.color),
          textStyleVerticalAlignmentKey: verticalAlignmentMap[args.verticalAlignment || 'top'],
          underlineStyle: args.underline ? 1 : 0,
          strikethroughStyle: args.strikethrough ? 1 : 0,
          kerning: args.kerning || undefined,
          paragraphStyle: new ParagraphStyle(args),
        },
      });
    }
  }
}

module.exports = StringAttribute;
