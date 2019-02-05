export default {
  index: (request, response) => {
    response.send("Hello There!");
  },
  responseGr: (request, response) => {
    response.send("Greetings General Kenobi");
  }
};