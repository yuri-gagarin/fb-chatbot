import express from 'express';
const app = express();

import dotenv from "dotenv";
dotenv.config();

import path from "path";
import mongoose from "mongoose";
import config from "./config/config";

const expressRouter = express.Router({caseSensitive: false});
import routes from "./routes/routes.js";
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 3000;

//mongoose connection
mongoose.connect(config.dbURL, {
  useNewUrlParser: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//router setup
routes(expressRouter);
app.use(expressRouter);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  console.log(config);
  console.log(process.env.NODE_ENV);
});
