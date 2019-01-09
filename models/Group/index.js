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

const Base = require('../Base');
const Rect = require('../Rect');
const Style = require('../Style');
const uuid = require('uuid-v4');

class Group extends Base {
  constructor(args = {}, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase()
      Object.assign(this, Group.model, {
        do_objectID: id,
        name: args.name || id,
        frame: new Rect( args.frame ),
        style: new Style( args.style ),
        layers: args.layers || []
      });
    }

    return this;
  }
}

Group.model = Object.assign({}, Base.model, {
  _class: "group",
  layerListExpandedType: 2,
  resizingConstraint: 63,
  hasClickThrough: false
});

module.exports = Group;