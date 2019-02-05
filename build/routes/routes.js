"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _indexRoutes = _interopRequireDefault(require("./indexRoutes.js"));

var _facebookRoutes = _interopRequireDefault(require("./facebookRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(router) {
  (0, _indexRoutes.default)(router);
  (0, _facebookRoutes.default)(router);
}

;
//# sourceMappingURL=routes.js.map