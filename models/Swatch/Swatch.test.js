const Color = require('../Color');
const Swatch = require('./index');

const json = {
  name: 'Test Color',
  value: new Color('#c9c'),
};

describe('Swatch', () => {
  it('should work from raw JSON', () => {
    const swatch = new Swatch(null, json);
    expect(swatch._class).toBe('swatch');
  });
});
