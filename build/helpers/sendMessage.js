"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = sendMessage;
exports.sendMessageAsync = sendMessageAsync;

var _request = _interopRequireDefault(require("request"));

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("../config/config.js"));

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

function sendMessageAsync(recipient, message) {
  var requestOptions = {
    method: "POST",
    url: "https://graph.facebook.com/v2.6/me/messages",
    params: {
      access_token: _config.default.fbTOKEN
    },
    data: {
      messaging_type: "RESPONSE",
      recipient: {
        id: recipient
      },
      message: {
        text: message
      }
    }
  };
  (0, _axios.default)(requestOptions).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
  s;
}
//# sourceMappingURL=sendMessage.js.map