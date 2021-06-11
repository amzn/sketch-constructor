const uuid = require('uuid-v4');
const Color = require('../Color/Color');

/**
 * Also known as 'Color Variables'
 */
class Swatch {
  static get Model() {
    return {
      _class: 'swatch',
    };
  }

  /**
   *
   * @param {Object} args
   * @param {String} args.name
   * @param {Color} args.color
   * @param {Color.Model} json
   */
  constructor(args, json) {
    if (json) {
      Object.assign(this, Swatch.Model, json);
      this.value = new Color(this.value);
    } else {
      const id = args.id || uuid().toUpperCase();
      const name = args.name || args.color.toHex().toUpperCase();
      Object.assign(this, Swatch.Model, {
        name,
        do_objectID: id,
        value: args.color,
      });
    }
  }

  /**
   * Get an object suitable for use in constructing colors
   * @returns {Color} A color with the `swatchID` set
   */
  asColor() {
    return { ...this.value.toRgb(), swatchID: this.do_objectID };
  }
}

module.exports = Swatch;
