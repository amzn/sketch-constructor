const { Page, Artboard } = require('sketch-constructor');
const colorGroup = require('./colorGroup');

class ColorPage extends Page {
  constructor(dictionary) {
    super({
      name: 'Colors',
    });

    this.layers = Object.keys(dictionary.properties.color).map((category, i) => {
      const layer = colorGroup(dictionary.properties.color[category], category);
      return new Artboard({
        name: category,
        layers: [layer],
        frame: {
          width: 1000,
          x: 1100 * i,
          height: layer.frame.height,
        },
      });
    });
  }
}

module.exports = ColorPage;
