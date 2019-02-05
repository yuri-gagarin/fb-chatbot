"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _indexController = _interopRequireDefault(require("../controllers/indexController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(router) {
  router.route("/").get(_indexController.default.index);
  router.route("/response").post(_indexController.default.responseGr);
}

;
//# sourceMappingURL=indexRoutes.js.map