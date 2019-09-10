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

 
export interface BitmapLayer {
  _class?: 'bitmapLayer'
  booleanOperation?: number
  clippingMask: Record<string, any>
  clippingMaskMode?: number
  do_objectID?: string
  exportOptions?: {
    [k: string]: any
  }
  fillReplacesImage?: boolean
  flow?: {
    [k: string]: any
  }
  frame?: {
    [k: string]: any
  }
  hasClippingMask?: boolean
  image?: {
    [k: string]: any
  }
  imageHash?: {
    [k: string]: any
  }
  /**
   * The scale the image was imported with into Sketch. This can be derived on import from the DPI of the image or the suffixes (@2x) of the filename. On legacy documents defaults to 0, which is meant to be the default image DPI of 72.
   */
  intendedDPI?: number
  isFixedToViewport?: boolean
  isFlippedHorizontal?: boolean
  isFlippedVertical?: boolean
  isLocked?: boolean
  isVisible?: boolean
  layerListExpandedType?: number
  name?: {
    [k: string]: any
  }
  nameIsFixed?: boolean
  originalObjectID?: {
    [k: string]: any
  }
  resizingConstraint?: number
  resizingType?: number
  rotation?: number
  sharedStyleID?: {
    [k: string]: any
  }
  shouldBreakMaskChain?: boolean
  style?: {
    [k: string]: any
  }
  userInfo?: {
    [k: string]: any
  }
}