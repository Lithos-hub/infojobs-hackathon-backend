"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _controllers = require("../controllers");
const router = (0, _express.Router)();
exports.router = router;
router.get("/", _controllers.handleGetOffers);
router.get("/:id", _controllers.handleGetOffer);