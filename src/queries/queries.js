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

export const foreign = async (key) => {
  const res = await axios.get(
    baseUrl + `foreign-brand${key.queryKey[1]}?page=${key.queryKey[2]}`
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
  console.log(key);

  const res = await axios.post(baseUrl + `contact`, key, {
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; multipart/form-data; charset=utf-8; boundary=" +
        Math.random().toString().substr(2),
    },
  });

  return await res.data;
};

export const chat = async (key) => {
  const res = await axios.post(baseUrl + `chat`, key);

  return await res.data;
};

export const catalog = async (key) => {
  const res = await axios.get(baseUrl + `catalog`);

  return await res.data;
};

export const branches = async (key) => {
  const res = await axios.get(baseUrl + `branches`);

  return await res.data;
};

export const branchesDescription = async (key) => {
  const res = await axios.get(baseUrl + `branches/${key.queryKey[1]}`);

  return await res.data;
};

export const exportApi = async (key) => {
  const res = await axios.post(baseUrl + `export`, key);

  return await res.data;
};

export const exportGetApi = async () => {
  const res = await axios.get(baseUrl + `export`);

  return await res.data;
};

export const resumeCv = async (key, slug) => {
  const res = await axios.post(baseUrl + `send-resume/${slug}`, key);

  return await res.data;
};

export const structureApi = async (key) => {
  const res = await axios.get(baseUrl + `structures`);

  return await res.data;
};

export const settingApi = async (key) => {
  const res = await axios.get(baseUrl + `setting`);

  return await res.data;
};

export const search = async (key) => {
  const res = await axios.get(baseUrl + `search?query=${key.queryKey[1]}`);

  return await res.data;
};

export const translations = async (key) => {
  const res = await axios.get(baseUrl + `translation/${key.queryKey[1]}`);

  return await res.data;
};
