const verifyWebhook = (request, response) => {
  let VERIFY_TOKEN = 'yuriy-chatbot';

  let mode = request.query['hub.mode'];
  let token = request.query['hub.verify-token'];
  let challenge = request.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    response.status(200);
    response.send(challenge);
  } else {
    response.status(403);
  }
};

export default verifyWebhook;
