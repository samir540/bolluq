import axios from "axios";

export function SetInterceptors() {
  axios.interceptors.request.use(async function (config) {
    let lang = localStorage.getItem("i18nextLng");

    console.log(lang)

    if (lang) {
      config.headers["locale"] = lang;
    } else {
      delete config.headers["locale"];
    }

    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response !== undefined) {
        return Promise.reject(error);
      }
    }
  );
}
