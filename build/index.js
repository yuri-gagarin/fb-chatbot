"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _verifyWebhook = _interopRequireDefault(require("./routes/verifyWebhook.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/verify-facebook', _verifyWebhook.default);
app.listen(PORT, function () {
  console.log("Listening on port: ".concat(PORT));
});
//# sourceMappingURL=index.js.map