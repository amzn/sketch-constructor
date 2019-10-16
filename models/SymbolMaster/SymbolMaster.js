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

  /**
   * Update existing SymbolInstance
   * Nested Symbols are not currently supported
   * @property {symbolInstance} SymbolInstance
   * @property {Object} args - overrides
   * @property {string} args[].name - name of the override being set
   * @property {string|Object} [args[].value] - the value set, for Layer Styles pass in object or do_objectID
   * @property {string|Object} [args[].style] - for textStyles only, pass in TextStyle object or do_objectID
   */
  updateInstance(symbolInstance, args) {
    args.forEach(arg => {
      const overrideLayer = this.getAllLayers().find(l => l.name === arg.name);

      if (overrideLayer !== undefined) {
        const overrideName = overrideLayer.do_objectID;

        symbolInstance.overrideValues
          .filter(prop => prop.overrideName.split('_')[0] === overrideName)
          .forEach(prop => {
            if (prop.overrideName.includes('_stringValue')) {
              prop.value = arg.value;
            }
            if (prop.overrideName.includes('_layerStyle')) {
              prop.value = arg.value instanceof Object ? arg.value.do_objectID : arg.value;
            }
            if (arg.extStyle && prop.overrideName.includes('_textStyle')) {
              prop.value = arg.style instanceof Object ? arg.style.do_objectID : arg.style.do_objectID;
            }
          });
      }
    });
  }

  /**
   * Creates a new SymbolInstance with overrides
   * Nested Symbols are not currently supported
   * @property {SymbolMaster} symbolMaster
   * @property {Object} [args]
   * @property {Object[]} [args.overrideValues] - overrides
   * @property {string} [args.overrideValues[].name] - name of the override being set
   * @property {string|Object} [args.overrideValues[].value] - the value set, for Layer Styles pass in object or do_objectID
   * @property {string|Object} [args.overrideValues[].style] - for textStyles only, pass in TextStyle object or do_objectID
   * @returns {SymbolInstance}
   */
  createInstance(args) {
    const symbolInstance = new SymbolInstance(
      {
          ...args,
          symbolID: this.symbolID,
          frame: new Rect(this.frame || {}),
          name: args.name || '',
          style: new Style(this.style),
          allowsOverrides: this.allowsOverrides,
      }
    );

    symbolInstance.overrideValues = this.overrideProperties.map(prop => ({
      _class: 'overrideValue',
      do_objectID: uuid().toUpperCase(),
      overrideName: prop.overrideName,
      value: '',
    }));

    if (args && args.overrideValues) {
      this.updateInstance(symbolInstance, args.overrideValues);
    }

    return symbolInstance;
  }
}

module.exports = SymbolMaster;
