"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sendMessage = _interopRequireWildcard(require("../helpers/sendMessage.js"));

var _this = void 0;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  checkNLP: function checkNLP(nlp, name) {
    return nlp && nlp.entities[name] && nlp.entities[name][0];
  },
  handleMessage: function handleMessage(request, response) {
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
        var downcasedMessage = message.toLowerCase().split(" ");

        if (downcasedMessage.includes('yuriy')) {
          (0, _sendMessage.sendMessageAsync)(sender, "Go to hell Yuriy!");
        } else {
          var greeting = _this.checkNLP(event.message, "greetings");

          if (greeting && greeting.confidence > 0.8) {
            (0, _sendMessage.sendMessageAsync)(sender, "Hello There. How can I help you?");
          } else {
            (0, _sendMessage.sendMessageAsync)(sender, "Sorry couldn't understand you");
          }
        }
      }
    }
  }
};
exports.default = _default;
//# sourceMappingURL=facebookController.js.map