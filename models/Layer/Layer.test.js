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

const Group = require('../Group');
const Text = require('../Text');

describe('Layer', () => {
  it('should work from raw JSON', () => {
    expect(true).toBeTruthy();
  });

  it('getLayers should get all children layers', () => {
    const group = new Group({
      name: 'group',
    });
    const text1 = new Text({
      name: 'text1',
    });
    const text2 = new Text({
      name: 'text2',
    });

    group.addLayer(text1);
    group.addLayer(text2);

    const layers = group.getLayers().map(l => l.name);

    expect(layers.sort()).toEqual(['text1', 'text2'].sort());
  });

  it('getLayers should only get direct children layers', () => {
    const outerGroup = new Group({
      name: 'outer group',
    });

    const innerGroup = new Group({
      name: 'inner group',
    });
    const text = new Text({
      name: 'text',
    });

    innerGroup.addLayer(text);
    outerGroup.addLayer(innerGroup);

    const layers = outerGroup.getLayers().map(l => l.name);

    expect(layers.sort()).toEqual(['inner group'].sort());
  });

  it('getAllLayers should get all children layers', () => {
    const outerGroup = new Group({
      name: 'outer group',
    });

    const innerGroup = new Group({
      name: 'inner group',
    });
    const text = new Text({
      name: 'text',
    });

    innerGroup.addLayer(text);
    outerGroup.addLayer(innerGroup);

    const layers = outerGroup.getAllLayers().map(l => l.name);

    expect(layers.sort()).toEqual(['inner group', 'text'].sort());
  });
});
