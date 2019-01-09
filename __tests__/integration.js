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

const {Sketch, SharedStyle, Page, Artboard} =  require('../index');
const {fileExists, clearOutput} = require('./__helpers');

describe('Integration', () => {
  // beforeEach(() => {
  //   clearOutput();
  // });

  it('should work', () => {
    let sketch = new Sketch();
    expect(sketch.getPages()).toEqual([]);
  });

  it('should set meta', () => {
    let sketch = new Sketch();
    expect(sketch.meta).toBeDefined();
  });

  it('should write a valid file', () => {
    let sketch = new Sketch();
    const page = new Page({
      name: 'My Page'
    });
    const artboard = new Artboard({
      frame: {
        width: 1024,
        height: 768
      },
      name: 'My Artboard'
    });
    sketch.addPage( page );
    sketch.addArtboard(page.getID(), artboard);
    const path = `${process.cwd()}/__tests__/__output/output.sketch`;
    sketch.build(path).then((path) => {
      expect(fileExists(path)).toBeTruthy();
    });
  });
});