import axios from "axios";

export function SetInterceptors() {
  let lang = localStorage.getItem("i18nextLng");

  axios.interceptors.request.use(async function (config) {
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
        if (error.response.status === 404) {
          window.location.href = `/${lang}/404`;
        }
        return Promise.reject(error);
      }
    }
  );
}
