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
const Rect = require('../Rect');
const Base = require('../Base');
const Style = require('../Style');
const AttributedString = require('../AttributedString');

class Text extends Base {
  constructor(args, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, {
        _class: "text",
        do_objectID: id,
        booleanOperation: -1,
        automaticallyDrawOnUnderlyingPath: false,
        dontSynchroniseWithSymbol: false,
        exportOptions: {
          _class: "exportOptions",
          exportFormats: [],
          includedLayerIds: [],
          layerOptions: 0,
          shouldTrim: false
        },
        frame: new Rect( args.frame ),
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isLocked: false,
        isVisible: true,
        layerListExpandedType: 0,
        layers: [],
        name: args.name || id,
        nameIsFixed: false,
        resizingConstraint: 47,
        resizingType: 0,
        rotation: 0,
        shouldBreakMaskChain: false,
        userInfo: {},

        style: args.style || Style.TextStyle({
          fontName: args.fontName,
          fontSize: args.fontSize,
          alignment: args.alignment,
          verticalAlignment: args.verticalAlignment,
          color: args.color
        }),

        attributedString: args.attributedString || new AttributedString({
          string: args.string || "",
          fontName: args.fontName,
          fontSize: args.fontSize,
          alignment: args.alignment,
          verticalAlignment: args.verticalAlignment,
          color: args.color
        }),

      });
    }
  }
}

Text.model = Object.assign({}, Base.model, {
  automaticallyDrawOnUnderlyingPath: false,
  dontSynchroniseWithSymbol: false,
  attributedString: AttributedString.model,
  glyphBounds: "{{5, 15}, {122, 55}}",
  lineSpacingBehaviour: 2,
  textBehaviour: 2
});

module.exports = Text;