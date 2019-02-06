import request from "request";
import axios from "axios";
import config from "../config/config.js";

export function sendMessage(recipient, message) {
  
  let requestOptions = {
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.FB_ACCESS_TOKEN},
    method: "POST",
    json: {
      messaging_type: "RESPONSE",
      recipient: {id: recipient},
      message: {text: message}
    }
  };

  function requestCallback(error, response, body) {
    if (error) {
      console.log(error);
    }
    else if (response.body.error) {
      console.log(response.body.error);
    }
  };

  request(requestOptions, requestCallback);

}

export function sendMessageAsync(recipient, message) {
  
  let requestOptions = {
    method: "POST",
    url: "https://graph.facebook.com/v2.6/me/messages",
    params: {
      access_token: config.fbTOKEN
    },
    data: {
      messaging_type: "RESPONSE",
      recipient: {id: recipient},
      message: {text: message}
    }
  };

  axios(requestOptions)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });s
}