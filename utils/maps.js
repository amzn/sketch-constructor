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
 * Maps text text behaviour integer enums to human-readable strings
 * @example
 * textBehaviourMap.auto // => 0
 */
const textBehaviourMap = {
  auto: 0,
  fixedWithOverlow: 1,
  fixed: 2,
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

/**
 * Maps blend modes int enums to human-readable strings
 * @example
 * blendModeMap.multiply // => 2
 */
const blendModeMap = {
  normal: 0,
  darken: 1,
  multiply: 2,
  colorBurn: 3,
  lighten: 4,
  screen: 5,
  colorDodge: 6,
  overlay: 7,
  softLight: 8,
  hardLight: 9,
  difference: 10,
  exclusion: 11,
  hue: 12,
  saturation: 13,
  color: 14,
  luminosity: 15,
  plusDarker: 16,
  plusLighter: 17,
};

Object.keys(blendModeMap).forEach(key => {
  blendModeMap[blendModeMap[key]] = key;
});

/**
 * Maps resizing contrains int enums to human-readable strings
 * @example
 * resizingConstraintsMap.top // => 31
 */
const resizingConstraintsMap = {
  top: 31,
  right: 62,
  bottom: 55,
  left: 59,
  width: 61,
  height: 47,
  none: 63,
};

const containsAllItems = (needles, haystack) => needles.every(needle => haystack.includes(needle));

module.exports = {
  textAlignmentMap,
  verticalAlignmentMap,
  textTransformMap,
  textBehaviourMap,
  blendModeMap,
  resizingConstraintsMap,
  containsAllItems,
};
