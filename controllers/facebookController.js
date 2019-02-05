export default {
  confirmWebhook: (request, response) => {
    let VERIFY_TOKEN = "y-apparel";

    let mode = request.query["hub.mode"];
    let token = request.query["hub.verify_token"];
    let challenge = request.query["hub.challenge"];

    if(mode && token) {
      if(token === VERIFY_TOKEN) {
        response.status(200);
        response.send(challenge);
      } else {
        respopnse.status(403);
      }
    }
  },
  sendMessage: (request, response) => {
    let all_messages = request.body.entry[0].messaging;
    let messages_length = all_messages.length;
    
    for (let i = 0; i < messages_length; i++) {
      let event = all_messages[i];
      response.status(200);
      response.set("Content-Type: application/json");
      response.send(event);
      //let sender = event.sender.id;

      if (event) {
       // console.log(sender);
        console.log(event.message);
      }
    }
  } 
};