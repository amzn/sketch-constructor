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

/**
 * Maps text alignment integer enums to human-readable strings
 * @example
 * textAlignmentMap.left // => 0
 */
const textAlignmentMap = {
  left: 0,
  right: 1,
  center: 2,
  justify: 3,
};

/**
 * Maps text transform integer enums to human-readable strings
 * @example
 * textTransformMap.uppercase // => 1
 */
const textTransformMap = {
  none: 0,
  uppercase: 1,
  lowercase: 2,
};

Object.keys(textAlignmentMap).forEach(key => {
  textAlignmentMap[textAlignmentMap[key]] = key;
});

/**
 * Maps vertical alignment int enums to human-readable strings
 * @example
 * verticalAlignmentMap.top // => 0
 */
const verticalAlignmentMap = {
  top: 0,
  bottom: 1,
  center: 2,
};

Object.keys(verticalAlignmentMap).forEach(key => {
  verticalAlignmentMap[verticalAlignmentMap[key]] = key;
});

module.exports = {
  textAlignmentMap,
  verticalAlignmentMap,
  textTransformMap,
};
