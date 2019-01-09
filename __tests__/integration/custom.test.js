const {Sketch, Text, Page, Artboard} = require('../../index');
const {fileExists, clearOutput} = require('../__helpers');

describe('Integration', () => {
  // beforeEach(() => {
  //   clearOutput();
  // });

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
    const text = new Text({
      name: 'My Text',
      string: 'Test',
      fontSize: 24
    });
    artboard.addLayer( text );
    sketch.addPage( page );
    sketch.addArtboard(page.getID(), artboard);
    const path = `${process.cwd()}/__tests__/__output/output2.sketch`;
    sketch.build(path).then((path) => {
      expect(fileExists(path)).toBeTruthy();
    });
  });
});