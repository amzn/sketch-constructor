/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

const { textAlignmentMap } = require('../../utils/maps');

class ParagraphStyle {
  static get Model() {
    return {
      _class: 'paragraphStyle',
      alignment: 0,
    };
  }

  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, ParagraphStyle.Model);
      if (args.alignment) this.alignment = textAlignmentMap[args.alignment];
      if (args.lineHeight) {
        this.maximumLineHeight = args.lineHeight;
        this.minimumLineHeight = args.lineHeight;
      }
      if (args.paragraphSpacing) this.paragraphSpacing = args.paragraphSpacing;
    }
  }
}

module.exports = ParagraphStyle;
