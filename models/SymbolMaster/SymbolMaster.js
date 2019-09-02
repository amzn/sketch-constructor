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
const Artboard = require('../Artboard');
const ExportOptions = require('../ExportOptions');
const Rect = require('../Rect');
const Style = require('../Style');
const Color = require('../Color');
const RulerData = require('../RulerData');
const SymbolInstance = require('../SymbolInstance');

const MSImmutableOverrideProperty = {
  _class: 'MSImmutableOverrideProperty',
  canOverride: true,
  overrideName: '',
};
class SymbolMaster extends Artboard {
  /**
   * The underlying JSON object structure in a Sketch document.
   * @mixes Artboard.Model
   * @property {string} symbolID
   * @property {int} changeIdentifier
   * @property {MSImmutableOverrideProperty[]} overrideProperties
   * @property {boolean} allowsOverrides
   */
  static get Model() {
    return Object.assign(Artboard.Model, {
      _class: 'symbolMaster',
      symbolID: '',
      changeIdentifier: 1,
      overrideProperties: [],
      allowsOverrides: true,
    });
  }

  constructor(args, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      const symbolID = args.symbolID || uuid().toUpperCase();

      Object.assign(this, SymbolMaster.Model, {
        do_objectID: id,
        symbolID,
        exportOptions: new ExportOptions(args.exportOptions),
        frame: new Rect(args.frame || {}),
        name: args.name || id,
        style: new Style(args.style),
        layers: args.layers || [],
        backgroundColor: new Color(args.backgroundColor || '#fff'),
        horizontalRulerData: new RulerData(args.horizontalRulerData),
        verticalRulerData: new RulerData(args.verticalRulerData),
        allowsOverrides: args.allowsOverrides,
      });

      // I don't know exactly what changeIdentifier does, but it appears to be
      // a unique int.
      SymbolMaster.Model.changeIdentifier += 1;
    }
    return this;
  }

  addLayer(layer, canOverride) {
    this.overrideProperties.push(
      Object.assign(MSImmutableOverrideProperty, {
        canOverride,
        overrideName: `${layer.do_objectID}_stringValue`,
      })
    );
    super.addLayer(layer);
  }

  createInstance(args) {
    const symbolInstance = new SymbolInstance(
      Object.assign({}, args, {
        symbolID: this.symbolID,
      })
    );

    symbolInstance.overrideValues = this.overrideProperties.map(prop => ({
      _class: 'overrideValue',
      do_objectID: uuid().toUpperCase(),
      overrideName: prop.overrideName,
      value: '',
    }));

    return symbolInstance;
  }
}

module.exports = SymbolMaster;
