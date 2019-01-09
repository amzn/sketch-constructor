const { Group, Text, Rectangle } = require('sketch-constructor');

class Swatch extends Group {
  constructor(args) {
    super({ frame: args.frame });
    const swatchColor = new Rectangle({
      width: 200,
      height: args.frame.height,
      x: 0,
      y: 0,
      name: args.value,
      style: {
        fills: [{
          color: args.value
        }]
      }
    });

    const swatchLabel = new Text({
      string: args.name,
      name: args.name,
      fontSize: 24,
      color: "#000",
      frame: {
        width: args.frame.width - 220,
        height: args.frame.height / 2,
        x: 220,
        y: 0,
      }
    });


    const swatchValue = new Text({
      string: args.value,
      name: args.value,
      fontSize: 16,
      color: "#ccc",
      frame: {
        width: args.frame.width - 220,
        height: args.frame.height / 2,
        x: 220,
        y: args.frame.height / 2,
      }
    });

    Object.assign(this, {
      layers: [
        swatchColor,
        swatchLabel,
        swatchValue
      ],
      name: args.name
    });
  }
}

module.exports = Swatch;