const { Sketch, Artboard, Group } = require('../index');
const { fileExists, clearOutput } = require('./__helpers');

describe('Editing', () => {
  // beforeEach(() => {
  //   clearOutput();
  // });

  it('should build', () => {
    return Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`).then((sketch) => {
      const artboard = sketch.getPages((page) => page.name === 'Page 1')[0].getArtboards()[0];
      artboard.addLayer(
        new Group({
          name: 'Testing',
        })
      );
      // sketch.build(`${process.cwd()}/__tests__/__output/foo.sketch`)
    });
  });
});
