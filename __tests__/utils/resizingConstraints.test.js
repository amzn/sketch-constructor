const { calculateResizingConstraint } = require('../../utils/resizingConstraints.js');
const { resizingConstraintsMap } = require('../../utils/maps.js');

describe('Test sizing constraints', () => {
  test('reduce series of numbers to their bitwise AND value', () => {
    const { top, left, height } = resizingConstraintsMap;
    const input = [left, height];
    // eslint-disable-next-line no-bitwise
    const output = top & left & height;

    expect(calculateResizingConstraint(top, ...input)).toEqual(output);
  });

  test('given undefined values will return `none` (63)', () => {
    const { top, wat, none } = resizingConstraintsMap;
    const output = none;

    expect(calculateResizingConstraint(top, wat)).toEqual(output);
  });

  describe('when given invalid combinations', () => {
    test('will throw when top, bottom & height are specified', () => {
      const { top, bottom, height } = resizingConstraintsMap;
      const input = [bottom, height];

      expect(() => calculateResizingConstraint(top, ...input)).toThrow();
    });

    test('will throw when left, right & width are specified', () => {
      const { left, right, width } = resizingConstraintsMap;
      const input = [right, width];

      expect(() => calculateResizingConstraint(left, ...input)).toThrow();
    });
  });
});
