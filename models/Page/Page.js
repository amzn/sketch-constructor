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
const Rect = require('../Rect');
const Style = require('../Style');
const Group = require('../Group');

/**
 *
 */
class Page extends Group {
  /**
   *
   * @param {Object} args
   * @param {Object} args.style {@link Style}
   * @param {Page.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = uuid().toUpperCase();
      Object.assign(this, Page.Model, {
        do_objectID: id,
        name: args.name || id,
        frame: new Rect(args.frame),
        style: new Style(args.style),
        layers: args.layers || [],
      });
    }
  }

  getID() {
    return this.do_objectID;
  }

  /**
   *
   * @param {function} predicate
   * @returns {Artboard[]}
   */
  getArtboards(predicate) {
    const arr = this.layers.filter(layer => layer._class === 'artboard');
    if (predicate) {
      return arr.filter(predicate);
    }
    return arr;
  }

  /**
   *
   * @param {String} name
   * @returns {Artboard}
   */
  getArtboard(name) {
    return this.getArtboards().find(artboard => artboard.name === name);
  }

  /**
   *
   * @param {Artboard} artboard
   * @returns {this}
   */
  addArtboard(artboard) {
    this.layers = this.layers.concat(artboard);
    return this;
  }
}

/**
 * @mixes Group.Model
 */
Page.Model = Object.assign({}, Group.Model, {
  _class: 'page',
});

module.exports = Page;
