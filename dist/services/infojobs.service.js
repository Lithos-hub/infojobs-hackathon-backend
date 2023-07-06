"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffers = exports.getOffer = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getOffers = async params => {
  return await _axios.default.get(`https://api.infojobs.net/api/9/offer?${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.FULL_SECRET}`
    }
  });
};
exports.getOffers = getOffers;
const getOffer = async id => {
  return await _axios.default.get(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.FULL_SECRET}`
    }
  });
};
exports.getOffer = getOffer;