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
const Base = require('../Base');
const RulerData = require('../RulerData');

class Artboard extends Base {
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Artboard.model, {
        do_objectID: id,
        exportOptions: new ExportOptions( args.exportOptions ),
        frame: new Rect( args.frame || {} ),
        name: args.name || id,
        style: new Style( args.style ),
        layers: args.layers || [],
        backgroundColor: new Color( args.backgroundColor || "#fff" ),
        horizontalRulerData: new RulerData( args.horizontalRulerData ),
        verticalRulerData: new RulerData( args.verticalRulerData ),
      });
    }
    return this;
  }
}

Artboard.model = Object.assign({}, Base.model, {
  _class: "artboard",
  shouldBreakMaskChain: true,
  hasClickThrough: true,
  layers: [],
  backgroundColor: {},
  hasBackgroundColor: false,
  horizontalRulerData: RulerData.model,
  includeBackgroundColorInExport: true,
  includeInCloudUpload: true,
  isFlowHome: false,
  resizesContent: false,
  verticalRulerData: RulerData.model
});

module.exports = Artboard;