import { Request, Response } from "express";
import { getOffer, getOffers } from "../services";

export const handleGetOffers = async (req: Request, res: Response) => {
  try {
    // Get the query params
    const search = req.query as Record<string, string>;

    // Serialize the query params to get ?param1=value1&param2=value2
    const params = new URLSearchParams(search).toString();

    const { data } = await getOffers(params);

    res.send(data.offers);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const handleGetOffer = async ({ params }: Request, res: Response) => {
  try {
    const { data } = await getOffer(params.id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
