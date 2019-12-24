const { Sketch } = require('sketch-constructor');
const ColorPage = require('./ColorPage');

module.exports = function BuildSketchWithStyles(dictionary) {
  // Create a new sketch instance
  const sketch = new Sketch();

  // Add shared styles for all background colors
  dictionary.allProperties
    .filter(prop => {
      return prop.attributes.category === 'color' && prop.attributes.type === 'background';
    })
    .forEach(prop => {
      sketch.addLayerStyle({
        name: prop.path.join(' / '),
        fills: [
          {
            color: prop.value,
          },
        ],
      });
    });

  // Add typography styles
  Object.keys(dictionary.properties.component.typography).forEach(key => {
    const font = dictionary.properties.component.typography[key];
    sketch.addTextStyle({
      name: key,
      fontSize: font['font-size'].value,
      color: font.color.value,
    });
  });

  // Add a custom color page
  sketch.addPage(new ColorPage(dictionary));

  // Build the sketch file
  sketch.build('./dist/style-dictionary.sketch');
};
