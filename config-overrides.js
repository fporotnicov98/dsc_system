const { useBabelRc, override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  addDecoratorsLegacy()
);

module.exports = override(useBabelRc());
