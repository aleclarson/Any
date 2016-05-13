var Validator, emptyFunction;

emptyFunction = require("emptyFunction");

Validator = require("Validator");

module.exports = Validator("Any", {
  test: emptyFunction.thatReturnsTrue,
  assert: emptyFunction
});

//# sourceMappingURL=../../map/src/Any.map
