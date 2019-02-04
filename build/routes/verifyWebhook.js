"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var verifyWebhook = function verifyWebhook(request, response) {
  var VERIFY_TOKEN = 'yuriy-chatbot';
  var mode = request.query['hub.mode'];
  var token = request.query['hub.verify-token'];
  var challenge = request.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    response.status(200);
    response.send(challenge);
  } else {
    response.status(403);
  }
};

var _default = verifyWebhook;
exports.default = _default;
//# sourceMappingURL=verifyWebhook.js.map