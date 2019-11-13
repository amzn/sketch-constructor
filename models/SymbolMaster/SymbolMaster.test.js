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
const Rectangle = require('../Rectangle');
const SharedStyle = require('../SharedStyle');
const TextStyle = require('../TextStyle');
const Group = require('../Group');

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
});

describe('addLayer', () => {
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

  it('should create an override for each child layer', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const group = new Group({
      name: 'group',
    });

    const text = new Text({
      string: 'text1',
    });

    const text2 = new Text({
      string: 'text2',
    });

    group.addLayer(text);
    group.addLayer(text2);
    symbolMaster.addLayer(group);

    expect(symbolMaster.overrideProperties[0].overrideName).toEqual(`${text.do_objectID}_stringValue`);
    expect(symbolMaster.overrideProperties[1].overrideName).toEqual(`${text2.do_objectID}_stringValue`);
  });

  it('should add override for text string and textStyle', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const blue = new SharedStyle({
      textStyle: {
        _class: 'textStyle',
        encodedAttributes: {
          MSAttributedStringColorAttribute: {
            _class: 'color',
            alpha: 1,
            blue: 1,
            green: 0,
            red: 0,
          },
        },
      },
    });

    const text = new Text({
      string: 'text',
    });

    text.setSharedStyle(blue);
    symbolMaster.addLayer(text);

    expect(symbolMaster.overrideProperties[0].overrideName).toEqual(`${text.do_objectID}_stringValue`);
    expect(symbolMaster.overrideProperties[1].overrideName).toEqual(`${text.do_objectID}_textStyle`);
  });

  it('should add override for layerStyle', () => {
    const white = new SharedStyle({
      name: 'white',
      fills: [
        {
          color: '#fff',
        },
      ],
    });

    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const layer = new Rectangle({
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      name: 'rectangle',
    });

    layer.setSharedStyle(white);
    symbolMaster.addLayer(layer);

    expect(symbolMaster.overrideProperties[0].overrideName).toEqual(`${layer.do_objectID}_layerStyle`);
  });
});

describe('createInstance', () => {
  it('should be able to create a symbol instance', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const symbolInstance = symbolMaster.createInstance();

    expect(symbolInstance.symbolID).toEqual(symbolMaster.symbolID);
  });

  it('should be able to create a symbol instance with overrideValues', () => {
    const symbolMaster = new SymbolMaster({
      name: 'test',
    });

    const layer = new Text({
      string: 'testing',
      name: 'text layer',
    });

    symbolMaster.addLayer(layer, true);
    const symbolInstance = symbolMaster.createInstance();

    expect(symbolInstance.symbolID).toEqual(symbolMaster.symbolID);
    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
  });

  it('should be able to create a symbol instance with text overrides', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const layer = new Text({
      name: 'text',
    });

    const overrideText = 'override text';

    symbolMaster.addLayer(layer, true);
    const symbolInstance = symbolMaster.createInstance({
      overrideValues: [
        {
          name: 'text',
          value: overrideText,
        },
      ],
    });

    expect(symbolInstance.overrideValues[0].value).toEqual(overrideText);
  });

  it('should be able to create a symbol instance with layer style overrides', () => {
    const beforeStyle = new SharedStyle({
      name: 'before',
      fills: [
        {
          color: '#fff',
        },
      ],
    });

    const afterStyle = new SharedStyle({
      name: 'after',
      fills: [
        {
          color: '#000',
        },
      ],
    });

    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const layer = new Rectangle({
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      name: 'rectangle',
    });

    layer.setSharedStyle(beforeStyle);
    symbolMaster.addLayer(layer, true);

    const symbolInstance = symbolMaster.createInstance({
      overrideValues: [
        {
          name: 'rectangle',
          value: afterStyle,
        },
      ],
    });

    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
    expect(symbolInstance.overrideValues[0].value).toEqual(afterStyle.do_objectID);
  });

  it('should be able to create a symbol instance with overrides within groups', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const group = new Group({
      name: 'group',
    });

    const text = new Text({
      name: 'text',
    });

    const overrideText = 'override text';

    group.addLayer(text);

    symbolMaster.addLayer(group, true);

    const symbolInstance = symbolMaster.createInstance({
      overrideValues: [
        {
          name: 'text',
          value: overrideText,
        },
      ],
    });

    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
    expect(symbolInstance.overrideValues[0].value).toEqual(overrideText);
  });
});

describe('updateInstance', () => {
  it('should be able to update text Symbol Instance override', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const layer = new Text({
      name: 'text',
      string: 'before',
    });

    const overrideText = 'after';

    symbolMaster.addLayer(layer, true);
    const symbolInstance = symbolMaster.createInstance({ name: 'instance' });

    symbolMaster.updateInstance(symbolInstance, [{ name: 'text', value: overrideText }]);

    expect(symbolInstance.overrideValues[0].value).toEqual(overrideText);
  });

  it('should be able to update Symbol Instance override with layer style', () => {
    const beforeStyle = new SharedStyle({
      name: 'before',
      fills: [
        {
          color: '#fff',
        },
      ],
    });

    const afterStyle = new SharedStyle({
      name: 'after',
      fills: [
        {
          color: '#000',
        },
      ],
    });

    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const layer = new Rectangle({
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      name: 'rectangle',
    });

    layer.setSharedStyle(beforeStyle);
    symbolMaster.addLayer(layer, true);

    const symbolInstance = symbolMaster.createInstance({
      name: 'instance',
    });

    symbolMaster.updateInstance(symbolInstance, [{ name: 'rectangle', value: afterStyle }]);

    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
    expect(symbolInstance.overrideValues[0].value).toEqual(afterStyle.do_objectID);
  });

  it('should be able to update Symbol Instance override within groups', () => {
    const symbolMaster = new SymbolMaster({
      name: 'symbol',
    });

    const group = new Group({
      name: 'group',
    });

    const text = new Text({
      name: 'text',
    });

    const overrideText = 'override text';

    group.addLayer(text);

    symbolMaster.addLayer(group, true);

    const symbolInstance = symbolMaster.createInstance({
      name: 'instance',
    });
    symbolMaster.updateInstance(symbolInstance, [{ name: 'text', value: overrideText }]);

    expect(symbolInstance.overrideValues[0].overrideName).toEqual(symbolMaster.overrideProperties[0].overrideName);
    expect(symbolInstance.overrideValues[0].value).toEqual(overrideText);
  });
});
