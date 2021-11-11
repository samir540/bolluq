import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";

// css
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
// App
import App from "./App";
// css
import "./assets/css/_base.scss";

const newClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/az">
      <Provider store={store}>
        <QueryClientProvider client={newClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
