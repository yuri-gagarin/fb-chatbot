"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  "dbURL": "mongodb://127.0.0.1:27017/ystore",
  "sessionSecret": process.env.SESSION_SECRET,
  "fbTOKEN": process.env.FB_ACCESS_TOKEN,
  "test": process.env.TEST
};
exports.default = _default;
//# sourceMappingURL=development.js.map