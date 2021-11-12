import { baseUrl } from "../services/api";
import axios from "axios";

export const statistics = async (key) => {
  const res = await axios.get(baseUrl + "statistics");

  return await res.data;
};

export const language = async (key) => {
  const res = await axios.get(baseUrl + "languages");

  return await res.data;
};

export const aboutApi = async (key) => {
  const res = await axios.get(baseUrl + "about");

  return await res.data;
};

export const certificates = async (key) => {
  const res = await axios.get(baseUrl + "certificates");

  return await res.data;
};

export const newsApi = async (key) => {
  const res = await axios.get(baseUrl + `news/?page=${key.queryKey[1]}`);

  return await res.data;
};

export const newsDetailApi = async (key) => {
  const res = await axios.get(baseUrl + `news/${key.queryKey[1]}`);

  return await res.data;
};

export const partners = async (key) => {
  const res = await axios.get(baseUrl + "partners");

  return await res.data;
};
