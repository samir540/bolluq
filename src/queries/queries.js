import { baseUrl } from "../services/api";
import axios from "axios";

export const statistics = async (key) => {
  const res = await axios.get(baseUrl + "statistics");

  return await res.data;
};

export const language = async (key) => {
  const res = await axios.get(
    "https://run.mocky.io/v3/6ccecc81-31b7-4c69-be79-31be00b1dedb"
  );

  return await res.data;
};
