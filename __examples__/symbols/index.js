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

const fs = require('fs-extra');
const { Sketch, Page, Text, SymbolMaster, Artboard } = require('../../index');

// Output directory
fs.ensureDirSync('./dist');

const sketch = new Sketch();

const page = new Page({
  name: 'my page',
});

const artboard = new Artboard({
  name: 'my artboard',
  frame: {
    width: 500,
    height: 500,
    x: 0,
    y: 0,
  },
});

const symbol = new SymbolMaster({
  name: 'symbol',
  frame: {
    width: 100,
    height: 100,
    x: 600,
    y: 0,
  },
});

const t = new Text({
  string: 'Hello',
  name: 'Hello',
  fontSize: 24,
  color: '#ccc',
  frame: {
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
});
symbol.addLayer(t, true);

const symbolInstance = symbol.createInstance({
  name: 'test',
  frame: {
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
});

artboard.addLayer(symbolInstance);

// Add the pages and artboards to the sketch object
page.addArtboard(symbol);
page.addArtboard(artboard);
sketch.addPage(page);

// Build the sketch file
sketch.build('./dist/output.sketch').then(() => {
  console.log('Built!');
});
