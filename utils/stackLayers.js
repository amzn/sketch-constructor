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

const Rect = require('../models/Rect');

/**
 * stackLayers
 * Positions an array of layers so they flow vertically like they would on the web.
 * @param {Layer[]} layers - An array of Layers
 * @param {int} gutter - Optional gutter between layers
 * @returns {Layer[]} - An array of Layers
 */
function stackLayers(layers, gutter = 0) {
  return layers.reduce((prev, curr) => {
    const y = prev.reduce((ret, item) => ret + item.frame.height + gutter, 0);
    curr.frame = new Rect({ ...curr.frame, y });
    return prev.concat(curr);
  }, []);
}

module.exports = stackLayers;
