"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sendMessage2 = _interopRequireDefault(require("../helpers/sendMessage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  confirmWebhook: function confirmWebhook(request, response) {
    var VERIFY_TOKEN = "y-apparel";
    var mode = request.query["hub.mode"];
    var token = request.query["hub.verify_token"];
    var challenge = request.query["hub.challenge"];

    if (mode && token) {
      if (token === VERIFY_TOKEN) {
        response.status(200);
        response.send(challenge);
      } else {
        respopnse.status(403);
      }
    }
  },
  sendMessage: function sendMessage(request, response) {
    var all_messages = request.body.entry[0].messaging;
    var messages_length = all_messages.length;

    for (var i = 0; i < messages_length; i++) {
      var event = all_messages[i];
      response.status(200);
      response.set("Content-Type: application/json");
      response.send(event);
      var sender = event.sender.id;

      if (event.message && sender && event.message.text) {
        var message = event.message.text;
        var downcasedMessage = message.downCase.split(" ");

        if (downcasedMessage.includes('yuriy')) {
          (0, _sendMessage2.default)(sender, "Go to hell Yuriy!");
        } else {
          (0, _sendMessage2.default)(sender, "Parrot responding: ".concat(message));
        }
      }
    }
  }
};
exports.default = _default;
//# sourceMappingURL=facebookController.js.map