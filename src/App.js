import React, { Suspense, lazy, useEffect } from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";
import { resize } from "./helper/helper";
import HomePage from "./pages/home";
import { connect } from "react-redux";
import { useQuery } from "react-query";
import { translations } from "./queries/queries";

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
const VacanciesDetail = lazy(() => import("./pages/vacanciesDetail"));
const History = lazy(() => import("./pages/history"));
const Principles = lazy(() => import("./pages/principles"));
const Form = lazy(() => import("./pages/form"));
const Catalogs = lazy(() => import("./pages/catalogs"));
const Contact = lazy(() => import("./pages/contact"));
const ProductsOur = lazy(() => import("./pages/productsOur"));
const ProductsExternal = lazy(() => import("./pages/productsExternal"));
const ProductsDetails = lazy(() => import("./pages/productDetails"));
const Structure = lazy(() => import("./pages/structure"));
const Export = lazy(() => import("./pages/export"));
const SearchResult = lazy(() => import("./pages/searchResult"));
const ErrorPage = lazy(() => import("./pages/error"));

function App({ lang, isHide }) {
  const { pathname } = useLocation();

  useQuery(["translations", localStorage.getItem("i18nextLng")], translations, {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (succ) => {
      if (
        localStorage.getItem(
          `TRANSLATE${localStorage.getItem("i18nextLng")}`
        ) === null
      ) {
        localStorage.setItem(
          `TRANSLATE${localStorage.getItem("i18nextLng")}`,
          JSON.stringify(succ)
        );
      } else {
        if (
          localStorage.getItem(
            `TRANSLATE${localStorage.getItem("i18nextLng")}`
          ) !== JSON.stringify(succ)
        ) {
          localStorage.setItem(
            `TRANSLATE${localStorage.getItem("i18nextLng")}`,
            JSON.stringify(succ)
          );
        }
      }
    },
  });

  useEffect(() => {
    resize();
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <div className={isHide === true ? "App overFlowHidden" : "App"}>
      <Title>
        <title>Bolluq</title>
        <link
          rel="icon"
          href={require("./assets/images/logo.png").default}
          type="image/jpg"
        />
      </Title>
      <Header
        lang={lang}
        headerId={pathname === "/" ? "homeHeader" : "inHeader"}
      />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/`} component={() => <HomePage />} />
            <Route path={`/news/:id`} render={() => <NewsDetail />} />
            <Route path={`/news`} render={() => <News />} />
            <Route
              path={`/productions/:slug`}
              render={() => <ProductionsDetails />}
            />
            <Route path={`/productions`} render={() => <Productions />} />
            <Route path={`/branch`} render={() => <Branch />} />
            <Route path={`/internship`} render={() => <InternShip />} />
            <Route path={`/rules`} render={() => <InternShipRules />} />
            <Route
              path={`/vacancies/:slug`}
              render={() => <VacanciesDetail />}
            />
            <Route path={`/vacancies`} render={() => <Vacancies />} />
            <Route path={`/about`} render={() => <About />} />
            <Route path={`/history`} render={() => <History />} />
            <Route path={`/principles`} render={() => <Principles />} />
            <Route path={`/form/:slug`} render={() => <Form />} />
            <Route path={`/catalogs`} render={() => <Catalogs />} />
            <Route path={`/contact`} render={() => <Contact />} />
            <Route
              path={`/our-products/category/:slug`}
              render={() => <ProductsOur />}
            />
            <Route path={`/our-products`} render={() => <ProductsOur />} />
            <Route
              path={`/external-products/category/:slug`}
              render={() => <ProductsExternal />}
            />
            <Route
              path={`/external-products`}
              render={() => <ProductsExternal />}
            />
            <Route
              path={`/products-detail/:slug`}
              render={() => <ProductsDetails />}
            />
            <Route
              exact
              path={`/search-result`}
              render={() => <SearchResult />}
            />
            <Route path={`/structure`} render={() => <Structure />} />
            <Route path={`/export`} render={() => <Export />} />
            <Route path={"*"} render={() => <ErrorPage />} />
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default connect((state) => ({
  isHide: state.isHide,
}))(App);
