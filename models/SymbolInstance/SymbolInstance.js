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
const Layer = require('../Layer');
const ExportOptions = require('../ExportOptions');
const Rect = require('../Rect');
const Style = require('../Style');

/**
 * This class is WIP
 */
class SymbolInstance extends Layer {
  /**
   * The underlying JSON object structure in a Sketch document.
   * @mixes Layer.Model
   * @property {string} symbolID
   * @property {overrideValue[]} overrideValues
   */
  static get Model() {
    return Object.assign({}, Layer.Model, {
      _class: 'symbolInstance',
      symbolID: '',
      overrideValues: [],
    });
  }

  /**
   *
   * @param {Object} args
   * @param {SymbolInstance.Model} json
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, SymbolInstance.Model, {
        do_objectID: id,
        symbolID: args.symbolID,
        exportOptions: new ExportOptions(args.exportOptions),
        frame: new Rect(args.frame || {}),
        name: args.name || id,
        style: new Style(args.style),
      });
    }
  }
}

module.exports = SymbolInstance;
