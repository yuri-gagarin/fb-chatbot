"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  "dbURL": process.env.DB_URL,
  "sessionSecret": process.env.SESSION_SECRET,
  "fbTOKEN": process.env.FB_ACCESS_TOKEN,
  "test": process.env.TEST
};
exports.default = _default;
//# sourceMappingURL=production.js.map