"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _fs = require("fs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const cleanFileName = fileName => fileName.split(".").shift();
const PATH_ROUTER = `${__dirname}`;
const router = (0, _express.Router)();
(0, _fs.readdirSync)(PATH_ROUTER).forEach(async filename => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    await (specifier => new Promise(r => r(specifier)).then(s => _interopRequireWildcard(require(s))))(`./${cleanName}.routes`).then(moduleRouter => {
      router.use(`/api/v1/${cleanName}`, moduleRouter.router);
    });
  }
});
var _default = router;
exports.default = _default;