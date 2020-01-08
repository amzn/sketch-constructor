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
const { Sketch, Page, Artboard, SharedStyle } = require('sketch-constructor');
const Swatch = require('./Swatch'); // custom component

// Output directory
fs.ensureDirSync('./dist');

const colors = [
  {
    label: 'Red',
    value: '#E53935',
  },
  {
    label: 'Blue',
    value: '#1E88E5',
  },
  {
    label: 'Green',
    value: '#43A047',
  },
  {
    label: 'Orange',
    value: '#ff9900',
  },
  {
    label: 'Purple',
    value: '#9c27b0',
  },
];

const sketch = new Sketch();

const page = new Page({
  name: 'my page',
});

const artboard = new Artboard({
  name: 'my artboard',
  frame: {
    width: colors.length * 220 + 20,
    height: 190,
  },
});

// Iterate over the colors and put our custom Swatch component
// on the artboard and add a layer style.
colors.forEach((color, i) => {
  const swatch = new Swatch({
    ...color,
    frame: {
      x: i * 220 + 20,
      y: 20,
      width: 200,
      height: 170,
    },
  });
  const layerStyle = SharedStyle.LayerStyle({
    name: color.label,
    fills: [
      {
        color: color.value,
      },
    ],
  });
  sketch.addLayerStyle(layerStyle);
  artboard.addLayer(swatch);
});

// Add the pages and artboards to the sketch object
page.addArtboard(artboard);
sketch.addPage(page);
// sketch.addArtboard( page.getID(), artboard );

// Build the sketch file
sketch.build('./dist/output.sketch').then(() => {
  console.log('Built!');
});
