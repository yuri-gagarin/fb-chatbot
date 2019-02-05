"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _facebookController = _interopRequireDefault(require("../controllers/facebookController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//facebook webhook routes
function _default(router) {
  router.route('/webhook').get(_facebookController.default.confirmWebhook);
  router.route("/webhook").post(_facebookController.default.sendMessage);
}
//# sourceMappingURL=facebookRoutes.js.map