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
const ExportOptions = require('../ExportOptions');
const Rect = require('../Rect');
const Style = require('../Style');
const Color = require('../Color');
const Group = require('../Group');
const RulerData = require('../RulerData');

/**
 * class Artboard
 * An artboard in Sketch
 */
class Artboard extends Group {
  /**
   * The underlying JSON object structure in a Sketch document.
   * @mixes Group.Model
   * @property {boolean} shouldBreakMaskChain
   * @property {RulerData.Model} horizontalRulerData
   * @property {RulerData.Model} verticalRulerData
   * @property {boolean} includeBackgroundColorInExport
   * @property {boolean} includeInCloudUpload
   * @property {boolean} isFlowHome
   * @property {boolean} resizesContent
   * @property {boolean} hasClickThrough
   * @property {Color.Model} backgroundColor
   */
  static get Model() {
    return {
      ...Group.Model,
      _class: 'artboard',
      shouldBreakMaskChain: true,
      backgroundColor: {},
      hasBackgroundColor: false,
      horizontalRulerData: RulerData.Model,
      verticalRulerData: RulerData.Model,
      includeBackgroundColorInExport: true,
      includeInCloudUpload: true,
      isFlowHome: false,
      resizesContent: false,
    };
  }

  /**
   *
   * @param {Object} args Use this when creating an artboard programmatically
   * @param {String} [args.backgroundColor] Passed to {@link Color} constructor
   * @param {Object} [args.exportOptions] Object passed to {@link ExportOptions} constructor
   * @param {Object} [args.frame] Object passed to {@link Rect} constructor
   * @param {String} [args.name]
   * @param {Layer[]} [args.layers]
   * @param {Object} [args.horizontalRulerData] Object passed to {@link RulerData} constructor
   * @param {Object} [args.verticalRulerData] Object passed to {@link RulerData} constructor
   * @param {Artboard.Model} json This is used using an existing
   */
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Artboard.Model, {
        do_objectID: id,
        exportOptions: new ExportOptions(args.exportOptions),
        frame: new Rect(args.frame || {}),
        name: args.name || id,
        style: new Style(args.style),
        layers: args.layers || [],
        backgroundColor: new Color(args.backgroundColor || '#fff'),
        hasBackgroundColor: args.backgroundColor ? true : false,
        horizontalRulerData: new RulerData(args.horizontalRulerData),
        verticalRulerData: new RulerData(args.verticalRulerData),
      });
    }
    return this;
  }
}

module.exports = Artboard;
