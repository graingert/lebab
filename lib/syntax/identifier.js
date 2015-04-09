"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseSyntax = _interopRequire(require("./base.js"));

/**
 * The class to define the Identifier syntax
 *
 * @class Identifier
 */

var Identifier = (function (_BaseSyntax) {

  /**
   * The constructor of Identifier
   *
   * @constructor
   */

  function Identifier(name) {
    _classCallCheck(this, Identifier);

    _get(Object.getPrototypeOf(Identifier.prototype), "constructor", this).call(this, "Identifier");

    this.name = name;
  }

  _inherits(Identifier, _BaseSyntax);

  return Identifier;
})(BaseSyntax);

module.exports = Identifier;