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

const SymbolMaster = require('./index');
const Text = require('../Text');
const json = require('./__SymbolMaster.json');

describe('SymbolMaster', () => {
  it('should be constructed from JSON', () => {
    const symbolMaster = new SymbolMaster(null, json);
    expect(JSON.stringify(symbolMaster)).toEqual(JSON.stringify(json));
  });

  it('should be constructed programatically', () => {
    const symbolMaster = new SymbolMaster({
      name: 'test',
    });
    expect(symbolMaster.name).toEqual('test');
  });

  it('should add overrideProperties', () => {
    const symbolMaster = new SymbolMaster({
      name: 'test',
    });

    const layer = new Text({
      string: 'testing',
      name: 'text layer',
    });

    symbolMaster.addLayer(layer, true);
    expect(symbolMaster.overrideProperties[0].overrideName).toEqual(`${layer.do_objectID}_stringValue`);
  });

  it('should be able to create symbol instances', () => {
    const symbolMaster = new SymbolMaster({
      name: 'test',
    });

    const layer = new Text({
      string: 'testing',
      name: 'text layer',
    });

    symbolMaster.addLayer(layer, true);
    const symbolInstance = symbolMaster.createInstance({
      frame: {
        width: 100,
        height: 100,
      },
    });

    expect(symbolInstance.symbolID).toEqual(symbolMaster.symbolID);
    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
  });
});
