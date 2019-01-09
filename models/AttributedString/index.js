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

const uuid = require('uuid-v4');
const StringAttribute = require('../StringAttribute');

class AttributedString {
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, {
        _class: "attributedString",
        string: args.string || '',
        attributes: args.attributes || [
          new StringAttribute(Object.assign({}, args, {
            location: 0,
            length: args.string.length
          }))
        ]
      });
    }
  }
}

AttributedString.model = {
  _class: "attributedString",
  string: '',
  attributes: []
}

module.exports = AttributedString;