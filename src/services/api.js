import axios from "axios";
import { API_URL } from "../env/config";

export const baseService = {
  getAll: async (url) => {
    let response = [];
    await axios
      .get(API_URL + url)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        console.log("Error", err);
      });

    return response;
  },
};
