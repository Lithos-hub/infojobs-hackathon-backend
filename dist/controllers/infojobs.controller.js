"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGetOffers = exports.handleGetOffer = void 0;
var _services = require("../services");
const handleGetOffers = async (req, res) => {
  try {
    // Get the query params
    const search = req.query;

    // Serialize the query params to get ?param1=value1&param2=value2
    const params = new URLSearchParams(search).toString();
    const {
      data
    } = await (0, _services.getOffers)(params);
    res.send(data.offers);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.handleGetOffers = handleGetOffers;
const handleGetOffer = async ({
  params
}, res) => {
  try {
    const {
      data
    } = await (0, _services.getOffer)(params.id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.handleGetOffer = handleGetOffer;