"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config/config"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

_dotenv.default.config();

var expressRouter = _express.default.Router({
  caseSensitive: false
});

var PORT = process.env.PORT || 3000; //mongoose connection

_mongoose.default.connect(_config.default.dbURL, {
  useNewUrlParser: true
});

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); //router setup

(0, _routes.default)(expressRouter);
app.use(expressRouter);
app.listen(PORT, function () {
  console.log("Listening on port: ".concat(PORT));
  console.log(_config.default);
  console.log(process.env.NODE_ENV);
});
//# sourceMappingURL=index.js.map