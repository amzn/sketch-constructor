const { Group, Text, stackLayers } = require('sketch-constructor');
const Swatch = require('./Swatch');

colorGroup = function(obj, name, level = 0) {
  if (obj.hasOwnProperty('value')) {
    return new Swatch(Object.assign({}, obj, {
      frame: {
        width: 1000,
        height: 100
      }
    }));
  } else {
    var layers = stackLayers(Object.keys(obj).reduce((ret, key, i) => {
      return ret.concat(colorGroup(obj[key], key, level + 1));
    }, []), 20);
    var lastLayer = layers[layers.length-1];
    var group = new Group({
      name: name,
      frame: {
        width: 1000,
        height: lastLayer.frame.height + lastLayer.frame.y
      },
      layers: layers.reverse()
    });
    return group;
  }
}

module.exports = colorGroup;