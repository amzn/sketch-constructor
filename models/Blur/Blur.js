class Blur {
  static get Model() {
    return {
      _class: 'blur',
      center: '{0.5, 0.5}',
      isEnabled: true,
      motionAngle: 0,
      radius: 0,
      saturation: 1,
      type: Blur.Type.Gaussian,
    };
  }

  static get Type() {
    return {
      Gaussian: 0,
      Motion: 1,
      Zoom: 2,
      Background: 3,
    };
  }

  /**
   * @param {Blur.Model} args
   * @param {Blur.Model} json
   */
  constructor(args, json) {
    if (json) Object.assign(this, json);
    if (args) Object.assign(this, Blur.Model, args);
  }

  /**
   * @param {Blur.Model} json
   * @returns {Blur}
   */
  static fromJSON(json) {
    return new Blur(null, json);
  }
}

module.exports = Blur;
