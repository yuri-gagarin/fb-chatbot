import dotenv from "dotenv";
dotenv.config();

export default {
  "dbURL": "mongodb://127.0.0.1:27017/ystore",
  "sessionSecret": process.env.SESSION_SECRET,
  "fbTOKEN": process.env.FB_ACCESS_TOKEN,
  "test": process.env.TEST
};