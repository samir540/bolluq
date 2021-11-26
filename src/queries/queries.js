import { baseUrl } from "../services/api";
import axios from "axios";

export const init = async (key) => {
  const res = await axios.get(baseUrl + `init`);

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

export const newsApi = async (key) => {
  const res = await axios.get(baseUrl + `news?page=${key.queryKey[1]}`);

  return await res.data;
};

export const newsDetailApi = async (key) => {
  const res = await axios.get(baseUrl + `news/${key.queryKey[1]}`);

  return await res.data;
};

export const histories = async (key) => {
  const res = await axios.get(baseUrl + "histories");

  return await res.data;
};

export const principles = async (key) => {
  const res = await axios.get(baseUrl + "principles");

  return await res.data;
};

export const productions = async (key) => {
  const res = await axios.get(baseUrl + "productions");

  return await res.data;
};

export const productionDetail = async (key) => {
  const res = await axios.get(baseUrl + `production/${key.queryKey[1]}`);

  return await res.data;
};

export const ourBrands = async (key) => {
  const res = await axios.get(
    baseUrl + `our-brands${key.queryKey[1]}?page=${key.queryKey[2]}`
  );

  return await res.data;
};

export const foreignBrands = async (key) => {
  const res = await axios.get(
    baseUrl + `foreign-brands${key.queryKey[1]}?page=${key.queryKey[2]}`
  );

  return await res.data;
};

export const productDetail = async (key) => {
  const res = await axios.get(
    baseUrl + `product/${key.queryKey[1]}?page=${key.queryKey[2]}`
  );

  return await res.data;
};

export const vacanciesApi = async (key) => {
  const request = {
    params: {
      position: key.queryKey[1].position,
      occupation: key.queryKey[1].occupation,
    },
  };

  const res = await axios.get(
    baseUrl + `vacancies?page=${key.queryKey[2]}`,
    request
  );

  return await res.data;
};

export const vacanciesFilter = async (key) => {
  const res = await axios.get(baseUrl + `vacancy-filter`);

  return await res.data;
};

export const vacanciesDetail = async (key) => {
  const res = await axios.get(baseUrl + `vacancies/${key.queryKey[1]}`);

  return await res.data;
};

export const internship = async (key) => {
  const res = await axios.get(baseUrl + `internship`);

  return await res.data;
};

export const rule = async (key) => {
  const res = await axios.get(baseUrl + `rule`);

  return await res.data;
};

export const contact = async (key) => {
  const res = await axios.post(baseUrl + `contact`, key, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return await res.data;
};

export const catalog = async (key) => {
  const res = await axios.get(baseUrl + `catalog`);

  return await res.data;
};
