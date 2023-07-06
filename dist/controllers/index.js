"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _infojobs = require("./infojobs.controller");
Object.keys(_infojobs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _infojobs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _infojobs[key];
    }
  });
});