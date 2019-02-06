import dotenv from "dotenv";
dotenv.config();

export default {
  "dbURL": process.env.DB_URL,
  "sessionSecret": process.env.SESSION_SECRET,
  "fbTOKEN": process.env.FB_ACCESS_TOKEN,
  "test": process.env.TEST
};