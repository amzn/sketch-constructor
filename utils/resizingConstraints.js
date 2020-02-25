const { containsAllItems, resizingConstraintsMap } = require('./maps.js');

const noHeight = [resizingConstraintsMap.top, resizingConstraintsMap.bottom, resizingConstraintsMap.height];
const noWidth = [resizingConstraintsMap.left, resizingConstraintsMap.right, resizingConstraintsMap.width];

/*
 * Sketch use Bit Masks to store the resizing settings.
 * To calculate the compound settings use the AND (&) bitwise operator.
 */
const calculateResizingConstraint = (...args) => {
  if (containsAllItems(noHeight, args)) {
    throw new Error("Can't fix height when top & bottom are fixed");
  }
  if (containsAllItems(noWidth, args)) {
    throw new Error("Can't fix width when left & right are fixed");
  }

  const [first, ...rest] = args;
  // eslint-disable-next-line no-bitwise
  return rest.reduce((acc, item) => acc & item, first) || resizingConstraintsMap.none;
};

module.exports = { calculateResizingConstraint };
