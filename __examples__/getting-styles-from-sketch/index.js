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

const fs = require('fs-extra');
const { Sketch } = require('sketch-constructor');
const sketchFile = './myFile.sketch';
const cssFile = './dist/styles.css';
fs.ensureDirSync('./dist');

console.log(`Reading sketch file: ${sketchFile}`);
Sketch.fromFile(sketchFile).then(sketch => {
  // Loop over the shared text styles in the document
  // Map them to a css declaration string
  // Join them into a single string with line breaks
  var css = sketch.getTextStyles()
    .map(sharedStyle => {
      let textStyle = sharedStyle.value.textStyle;
      console.log(`Writing css declaration for: ${sharedStyle.name}`);
      return `.${sharedStyle.name} {
  color: ${textStyle.getColor().toRgbString()};
  font-size: ${textStyle.getFontSize()}px;
  font-family: '${textStyle.getFontName()}';
}`
    })
    .join('\n');

  // Write our css to a file
  console.log(`Writing css file: ${cssFile}`);
  fs.writeFileSync(cssFile, css);
});