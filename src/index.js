import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
// import "./i18/i18n";
import store from "./store/store";

// css
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
// App
import App from "./App";
// css
import "./assets/css/_base.scss";
import { SetInterceptors } from "./services/interCeptors";
import { language } from "./queries/queries";

const newClient = new QueryClient();

language().then((res) => {
  const path = window.location.pathname.split("/")[1];

  const filtered = res.data.filter((e) => e.locale === path);

  res.data.forEach((lang) => {
    if (filtered.length !== 0) {
      console.log("ok");

      localStorage.setItem("i18nextLng", path);
      SetInterceptors();
      ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter basename={localStorage.getItem("i18nextLng")}>
            <Provider store={store}>
              <QueryClientProvider client={newClient}>
                <App lang={res.data} />
              </QueryClientProvider>
            </Provider>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
      );
    } else {
      if (lang.default === 1) {
        localStorage.setItem("i18nextLng", lang.locale);
        SetInterceptors();

        console.log(lang);

        ReactDOM.render(
          <React.StrictMode>
            <BrowserRouter basename={localStorage.getItem("i18nextLng")}>
              <Provider store={store}>
                <QueryClientProvider client={newClient}>
                  <App lang={res.data} />
                </QueryClientProvider>
              </Provider>
            </BrowserRouter>
          </React.StrictMode>,
          document.getElementById("root")
        );
        reportWebVitals();
      }
    }
  });
});
