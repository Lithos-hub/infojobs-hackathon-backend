"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffer = exports.getOffers = void 0;
const axios_1 = __importDefault(require("axios"));
const getOffers = (params) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(`https://api.infojobs.net/api/9/offer?${params}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${process.env.FULL_SECRET}`,
        },
    });
});
exports.getOffers = getOffers;
const getOffer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(`https://api.infojobs.net/api/7/offer/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${process.env.FULL_SECRET}`,
        },
    });
});
exports.getOffer = getOffer;
