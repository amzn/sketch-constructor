const { Group, stackLayers } = require('sketch-constructor');
const Swatch = require('./Swatch');

function colorGroup(obj, name, level = 0) {
  if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
    return new Swatch({
      ...obj,
      frame: {
        width: 1000,
        height: 100,
      },
    });
  }

  const layers = stackLayers(
    Object.keys(obj).reduce((ret, key) => {
      return ret.concat(colorGroup(obj[key], key, level + 1));
    }, []),
    20
  );
  const lastLayer = layers[layers.length - 1];

  return new Group({
    name,
    frame: {
      width: 1000,
      height: lastLayer.frame.height + lastLayer.frame.y,
    },
    layers: layers.reverse(),
  });
}

module.exports = colorGroup;
