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

// TODO: Add more layer types
const strToClass = {
  artboard: require('../models/Artboard'),
  group: require('../models/Group'),
  text: require('../models/Text'),
  shapeGroup: require('../models/ShapeGroup'),
};

/**
 * layerToClass
 *
 * Takes a raw JSON layer and returns a new class instance.
 * @param {Object} layer - The raw JSON of a layer as an object
 * @returns {Layer} - An instance of a subclass of a Layer, such as Artboard, Group, or Text
 */
function layerToClass(layer) {
  if (strToClass[layer._class]) {
    return new strToClass[layer._class](null, layer);
  }
  return layer;
}

module.exports = layerToClass;
