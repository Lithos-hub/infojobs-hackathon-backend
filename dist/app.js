"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// init
const app = (0, _express.default)();

// settings
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

// middlewares
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.json());
const PATH_STORAGE = `${process.cwd()}/src/public`;
app.use(_express.default.static(PATH_STORAGE));

// routes
app.use(_routes.default);
var _default = app;
exports.default = _default;