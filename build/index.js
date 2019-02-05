"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

_dotenv.default.config();

var expressRouter = _express.default.Router({
  caseSensitive: false
});

var PORT = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); //router setup

(0, _routes.default)(expressRouter);
app.use(expressRouter);
app.listen(PORT, function () {
  console.log("Listening on port: ".concat(PORT));
  console.log(process.env.TEST);
});
//# sourceMappingURL=index.js.map