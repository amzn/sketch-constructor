const uuid = require('uuid-v4');
const Layer = require('../Layer');
const Rect = require('../Rect');
const Style = require('../Style');

class Star extends Layer {
  static get Model() {
    return {
      ...super.Model,
      _class: 'star',
      numberOfPoints: 5,
      radius: 0,
    };
  }

  constructor(args, json) {
    super(args, json);
    if (!json) {
      const id = args.id || uuid().toUpperCase();
      Object.assign(this, Star.Model, {
        do_objectID: id,
        name: args.name || id,
        style: args.style ? Style.LayerStyle(args.style) : null,
        frame: new Rect(args.frame),
      });
      if (args.numberOfPoints) this.numberOfPoints = args.numberOfPoints;
      if (args.radius) this.radius = args.radius;
    }
  }
}

module.exports = Star;
