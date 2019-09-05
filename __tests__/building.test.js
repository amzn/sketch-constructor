const { Sketch, Text, Page, Artboard } = require('../index');
const { fileExists, clearOutput } = require('./__helpers');

describe('Building from scratch', () => {
  beforeEach(() => {
    clearOutput();
  });

  it('should write a valid file', async () => {
    await (async () => {
      const sketch = new Sketch();
      const page = new Page({
        name: 'My Page',
      });
      const artboard = new Artboard({
        frame: {
          width: 1024,
          height: 768,
        },
        name: 'My Artboard',
      });
      const text = new Text({
        name: 'My Text',
        string: 'Test',
        fontSize: 24,
      });
      artboard.addLayer(text);
      sketch.addPage(page);
      sketch.addArtboard(page.getID(), artboard);
      const path = `${process.cwd()}/__tests__/__output/output2.sketch`;
      const outputPath = await sketch.build(path);
      expect(fileExists(outputPath)).toBeTruthy();

      const { meta } = sketch;
      expect(Object.keys(meta.pagesAndArtboards || {}).length).toEqual(1);
      const metaPage = Object.values(meta.pagesAndArtboards)[0];
      expect(metaPage.name).toEqual('My Page');
      expect(Object.keys(metaPage.artboards).length).toEqual(1);
      const metaArtboard = Object.values(metaPage.artboards)[0];
      expect(metaArtboard.name).toEqual('My Artboard');
    })();

    // another sketch should have correct meta
    await (async () => {
      const { meta } = new Sketch();
      expect(Object.keys(meta.pagesAndArtboards || {}).length).toEqual(0);
    })();
  });
});
