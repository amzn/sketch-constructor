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

import Layer = require('../Layer');

declare class Bitmap extends Layer {
  _class: 'bitmap';
  clippingMask: Record<string, any>;
  clippingMaskMode?: number;
  fillReplacesImage?: boolean;
  flow?: Record<string, any>;
  hasClippingMask?: boolean;
  image?: Record<string, any>;
  imageHash?: Record<string, any>;
  /**
   * The scale the image was imported with into Sketch. This can be derived on import from the DPI of the image or the suffixes (@2x) of the filename. On legacy documents defaults to 0, which is meant to be the default image DPI of 72.
   */
  intendedDPI?: number;
  originalObjectID?: Record<string, any>;
  sharedStyleID?: Record<string, any>;
  userInfo?: Record<string, any>
}

export = Bitmap;
