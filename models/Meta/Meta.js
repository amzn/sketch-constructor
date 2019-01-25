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
 * This is an internal class, you shouldn't be directly dealing with this class. It outputs the meta.json file in the top level directory of a Sketch file.
 */
class Meta {
  /**
   *
   * @param {Meta.Model} args
   * @param {Meta.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, Meta.Model, args);
    }
  }

  addPage(page) {
    this.pagesAndArtboards[page.getID()] = {
      name: page.name,
      artboards: page.getArtboards().reduce((ret, artboard) => {
        ret[artboard.do_objectID] = { name: artboard.name };
        return ret;
      }, {}),
    };
  }

  addArtboard(pageID, artboard) {
    this.pagesAndArtboards[pageID].artboards[artboard.getID()] = {
      name: artboard.name,
    };
  }
}

/**
 * @property {String} commit
 * @property {Object} pagesAndArtboards
 * @property {integer} version
 * @property {Array} fonts
 * @property {integer} compatibilityVersion
 * @property {String} app
 */
Meta.Model = {
  commit: 'ebc3e0ead0906f5810891944454a71b877934b56',
  pagesAndArtboards: {},
  version: 112,
  fonts: [],
  compatibilityVersion: 99,
  app: 'com.bohemiancoding.sketch3',
  autosaved: 0,
  variant: 'NONAPPSTORE',
  created: {
    commit: 'ebc3e0ead0906f5810891944454a71b877934b56',
    appVersion: '52.5',
    build: 67469,
    app: 'com.bohemiancoding.sketch3',
    compatibilityVersion: 99,
    version: 112,
    variant: 'NONAPPSTORE',
  },
  saveHistory: ['NONAPPSTORE.67469'],
  appVersion: '52.5',
  build: 67469,
};

module.exports = Meta;
