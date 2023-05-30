import axios from "axios";

export const getOffers = async (params: any) => {
  return await axios.get(`https://api.infojobs.net/api/9/offer?${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.FULL_SECRET}`,
    },
  });
};

export const getOffer = async (id: string) => {
  return await axios.get(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.FULL_SECRET}`,
    },
  });
};
