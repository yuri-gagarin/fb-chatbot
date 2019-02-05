"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMessage;

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMessage(recipient, message) {
  var requestOptions = {
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {
      access_token: process.env.FB_ACCESS_TOKEN
    },
    method: "POST",
    json: {
      messaging_type: "RESPONSE",
      recipient: {
        id: recipient
      },
      message: {
        text: message
      }
    }
  };

  function requestCallback(error, response, body) {
    if (error) {
      console.log(error);
    } else if (response.body.error) {
      console.log(response.body.error);
    }
  }

  ;
  (0, _request.default)(requestOptions, requestCallback);
}
//# sourceMappingURL=sendMessage.js.map