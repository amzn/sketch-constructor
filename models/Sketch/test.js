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

const { Sketch, SharedStyle, Page, Artboard } = require('../index');

describe('Sketch', () => {
  it('should set pages', () => {
    let sketch = new Sketch();
    expect(sketch.getPages()).toEqual([]);
  });

  it('should set meta', () => {
    let sketch = new Sketch();
    expect(sketch.meta).toBeDefined();
  });

  describe('build', () => {
    it('should work', () => {
      expect(true).toBeTrue;
      return Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`)
        .then((sketch) => {
          expect(sketch).toBeDefined();
        });
    });

    it('should build', () => {
      return Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`)
        .then((sketch) => {
          return sketch.build(`${process.cwd()}/__tests__/__output/test2.sketch`);
        }).then((output) => {
          expect(output).toEqual(`${process.cwd()}/__tests__/__output/test2.sketch`);
        });
    });
  });

  describe('add shared text style', () => {
    it('should work', () => {
      return Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`)
        .then((sketch) => {
          const textStyle = SharedStyle.TextStyle({
            name: "foobar"
          });
          const layerStyle = SharedStyle.LayerStyle({
            name: "blaha",
            fills: [{
              color: "blue"
            }],
            borders: [{
              color: "#ff9900"
            }]
          });
          sketch.document.addTextStyle( textStyle );
          sketch.document.addLayerStyle( layerStyle );
          return sketch.build(`${process.cwd()}/__tests__/__output/test3.sketch`);
        }).then((output) => {
          expect(output).toEqual(`${process.cwd()}/__tests__/__output/test3.sketch`);
        });
    });
  });


  describe('add page', () => {
    it('should work', () => {
      return Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`)
        .then((sketch) => {
          const page = new Page({
            name: "my page"
          });
          const artboard = new Artboard({
            name: "my artboard",
            frame: {
              width: 1024,
              height: 768
            }
          });
          sketch.addPage( page );
          sketch.addArtboard(page.getID(), artboard);
          return sketch.build(`${process.cwd()}/__tests__/__output/test4.sketch`);
        }).then((output) => {
          expect(output).toEqual(`${process.cwd()}/__tests__/__output/test4.sketch`);
        });
    });
  });
});
