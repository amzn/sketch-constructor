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
const TextStyle = require('../TextStyle');
const Fill = require('../Fill');
const Border = require('../Border');

class Style {
  static LayerStyle(args = {}) {
    const id = args.id || uuid().toUpperCase();
    return new Style({
      id: id,
      fills: (args.fills||[]).map(fill => new Fill(fill)),
      borders: (args.borders||[]).map(border => new Border(border))
    })
  }

  static TextStyle(args = {}) {
    const id = args.id || uuid().toUpperCase();
    return new Style({
      id: id,
      textStyle: new TextStyle(
        Object.assign(args, {id: id})
      )
    })
  }

  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
      if (this.textStyle)
        this.textStyle = new TextStyle(null, this.textStyle);
      if (this.fills)
        this.fills = this.fills.map(fill => new Fill(null, fill));
      if (this.borders)
        this.borders = this.borders.map(border => new Border(null, border));
    } else {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Style.model, {
        do_objectID: id,
        borders: args.borders,
        fills: args.fills,
        shadows: args.shadows,
        textStyle: args.textStyle
      });
    }
  }

  toString() {
    return JSON.stringify(this);
  }
}

Style.model = {
  _class: "style",
  do_objectID: "",
  startMarkerType: 0,
  endMarkerType: 0,
  miterLimit: 10,
  windingRule: 0,
  borders: [],
  fills: [],
  shadows: [],
  textStyle: {}
}

module.exports = Style;