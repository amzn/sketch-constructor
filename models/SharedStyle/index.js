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
const Style = require('../Style');
const Fill = require('../Fill');
const Border = require('../Border');
const Shadow = require('../Shadow');

class SharedStyle {
  static LayerStyle(args) {
    const id = args.id || uuid().toUpperCase();
    return new SharedStyle({
      name: args.name,
      id: id,
      fills: (args.fills||[]).map(fill => new Fill(fill)),
      borders: (args.borders||[]).map(border => new Border(border)),
      shadows: (args.shadows||[]).map(shadow => new Shadow(shadow)),
    })
  }

  static TextStyle(args) {
    const id = args.id || uuid().toUpperCase();
    return new SharedStyle({
      name: args.name,
      id: id,
      textStyle: new TextStyle(
        Object.assign(args, {id: id})
      )
    })
  }

  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
      // Created nested class
      this.value = new Style(null, this.value);
    } else {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, {
        name: args.name || "Name",
        do_objectID: id,
        _class: "sharedStyle",
        value: new Style({
          id: id,
          textStyle: args.textStyle,
          borders: args.borders,
          fills: args.fills,
          shadows: args.shadows
        })
      });
    }
  }
}

module.exports = SharedStyle;