import { Router } from "express";
import { handleGetOffers, handleGetOffer } from "../controllers";

const router = Router();

router.get("/", handleGetOffers);
router.get("/:id", handleGetOffer);

export { router };
