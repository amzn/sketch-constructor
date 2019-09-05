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

/**
 *
 */
class User {
  /**
   * @property {Object} document
   * @property {String} document.pageListHeight
   */
  static get Model() {
    return {
      document: {
        pageListHeight: '200',
      },
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String} [args.pageListHeight]
   * @param {User.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, {
        document: {
          pageListHeight: args.pageListHeight || '200',
        },
      });
    }
  }

  /**
   *
   * @param {String} pageID
   * @param {Object} opts
   * @param {String} opts.scrollOrigin
   * @param {integer} opts.zoomValue
   * @returns {this}
   */
  addPage(pageID, opts = {}) {
    this[pageID] = Object.assign(
      {},
      {
        scrollOrigin: '{100, 100}',
        zoomValue: 1,
      },
      opts
    );
    return this;
  }
}

module.exports = User;
