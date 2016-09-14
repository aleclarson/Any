
var emptyFunction = require('emptyFunction');
var Validator = require('Validator');

var Any = Validator('Any', {
  test: emptyFunction.thatReturnsTrue,
  assert: emptyFunction,
});

module.exports = Any;
