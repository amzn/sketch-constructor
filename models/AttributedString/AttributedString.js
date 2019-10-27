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

const StringAttribute = require('../StringAttribute');

/**
 * An AttributedString is a string of text that has certain parts of it with different styles.
 */
class AttributedString {
  /**
   * @property {String} string
   * @property {StringAttribute[]} attributes
   */
  static get Model() {
    return {
      _class: 'attributedString',
      string: '',
      attributes: [],
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String} args.string
   * @param {StringAttribute[]} [args.attributes] If you don't pass any attributes, this will pass args to a new StringAttribute that will cover the full lenght of the string
   * @param {AttributedString.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, {
        _class: 'attributedString',
        string: args.string || '',
        attributes: args.attributes || [new StringAttribute({ ...args, location: 0, length: args.string.length })],
      });
    }
  }
}

module.exports = AttributedString;
