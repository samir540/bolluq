import React, { Suspense, lazy, useEffect } from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";
import { resize } from "./helper/helper";
import HomePage from "./pages/home";
import { SetInterceptors } from "./services/interCeptors";
import "./i18/i18n";
import { useTranslation } from "react-i18next";

// pages
const News = lazy(() => import("./pages/news"));
const NewsDetail = lazy(() => import("./pages/newsDetail"));
const Productions = lazy(() => import("./pages/productions"));
const ProductionsDetails = lazy(() => import("./pages/productionsDetails"));
const Branch = lazy(() => import("./pages/branch"));
const InternShip = lazy(() => import("./pages/internShip"));
const InternShipRules = lazy(() => import("./pages/internShipRules"));
const About = lazy(() => import("./pages/about"));
const Vacancies = lazy(() => import("./pages/vacancies"));
const History = lazy(() => import("./pages/history"));
const Values = lazy(() => import("./pages/values"));
const Catalogs = lazy(() => import("./pages/catalogs"));
const Contact = lazy(() => import("./pages/contact"));
const ErrorPage = lazy(() => import("./pages/error"));

function App() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    resize();
  });

  useEffect(() => {
    SetInterceptors();
    i18n.changeLanguage("az");
  }, []);

  return (
    <div className="App">
      <Title>
        <title>Bolluq</title>
      </Title>
      <Header headerId={pathname === "/" ? "homeHeader" : "inHeader"} />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/`} render={() => <HomePage />} />
            <Route path={`/news/:id`} render={() => <NewsDetail />} />
            <Route path={`/news`} render={() => <News />} />
            <Route
              path={`/productions/:id`}
              render={() => <ProductionsDetails />}
            />
            <Route path={`/productions`} render={() => <Productions />} />
            <Route path={`/branch`} render={() => <Branch />} />
            <Route path={`/internship`} render={() => <InternShip />} />
            <Route path={`/rules`} render={() => <InternShipRules />} />
            <Route path={`/vacancies`} render={() => <Vacancies />} />
            <Route path={`/about`} render={() => <About />} />
            <Route path={`/history`} render={() => <History />} />
            <Route path={`/values`} render={() => <Values />} />
            <Route path={`/catalogs`} render={() => <Catalogs />} />
            <Route path={`/contact`} render={() => <Contact />} />
            <Route path={"*"} render={() => <ErrorPage />} />
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
