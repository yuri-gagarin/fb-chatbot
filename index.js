import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
const expressRouter = express.Router({caseSensitive: false});
import routes from "./routes/routes.js";


import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//router setup
routes(expressRouter);
app.use(expressRouter);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  console.log(process.env.TEST);
});
