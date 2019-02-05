import request from "request";

export default function sendMessage(recipient, message) {
  
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