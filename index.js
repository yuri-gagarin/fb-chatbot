import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;

import verifyWebhook from "./routes/verifyWebhook.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/verify-facebook', verifyWebhook);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
