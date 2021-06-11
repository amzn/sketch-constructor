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

  it('should have a default name when no name is given', () => {
    const lime = new Color('limegreen');
    const unnamedSwatch = new Swatch({ color: lime });
    expect(unnamedSwatch.name).toBe('32CD32');

    const namedSwatch = new Swatch({ name: 'Lime', color: lime });
    expect(namedSwatch.name).toBe('Lime');
  });

  it('asColor should work', () => {
    const color = new Color('#F00');
    const swatch = new Swatch({ color });
    const refColor = swatch.asColor();
    expect(refColor.swatchID).not.toBeUndefined();
    expect(refColor.swatchID).toBe(swatch.do_objectID);
    expect(refColor.r).toBe(255);
    expect(refColor.g).toBe(0);
    expect(refColor.b).toBe(0);
    expect(refColor.a).toBe(1);
  });
});
