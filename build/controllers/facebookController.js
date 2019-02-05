"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
      response.send(event); //let sender = event.sender.id;

      if (event) {
        // console.log(sender);
        console.log(event.message);
      }
    }
  }
};
exports.default = _default;
//# sourceMappingURL=facebookController.js.map