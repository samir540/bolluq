import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, useLocation, Switch, useHistory } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";
import { resize } from "./helper/helper";
import HomePage from "./pages/home";
import { language } from "./queries/queries";

// pages
const News = lazy(() => import("./pages/news"));
const Productions = lazy(() => import("./pages/productions"));
const ProductionsDetails = lazy(() => import("./pages/productionsDetails"));
const Branch = lazy(() => import("./pages/branch"));
const InternShip = lazy(() => import("./pages/internShip"));
const InternShipRules = lazy(() => import("./pages/internShipRules"));
const About = lazy(() => import("./pages/about"));
const ErrorPage = lazy(() => import("./pages/error"));

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    resize();
  });

  useEffect(() => {
    language()
      .then((res) => {
        setUpdate(true);
        const defaultLang = window.location.pathname.split("/")[1];
        const check = res.data.filter((e) => e.locale === defaultLang);
        const filtered = res.data.filter((e) => e.default === 1);
        localStorage.setItem("lang", "/" + filtered[0].locale);
        setLang("/" + filtered[0].locale);
        if (check.length !== 0) {
          setLang("/" + defaultLang);
        } else {
          history.push({
            pathname: pathname.replace(defaultLang, "az"),
          });

          setLang("/az");
        }
      })
      .catch((err) => {
        setUpdate(true);
        localStorage.setItem("lang", "/az");
        setLang("/az");
      });
  }, []);

  return (
    <div className="App">
      <Title>
        <title>Bolluq</title>
      </Title>
      <Header
        lang={lang}
        headerId={pathname === "/" ? "homeHeader" : "inHeader"}
      />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact
              path={`${lang}`}
              render={() => <HomePage lang={lang} />}
            />
            <Route path={`${lang}/news`} render={() => <News lang={lang} />} />
            <Route
              path={`${lang}/productions/:id`}
              render={() => <ProductionsDetails lang={lang} />}
            />
            <Route
              path={`${lang}/productions`}
              render={() => <Productions lang={lang} />}
            />
            <Route
              path={`${lang}/branch`}
              render={() => <Branch lang={lang} />}
            />
            <Route
              path={`${lang}/internship`}
              render={() => <InternShip lang={lang} />}
            />
            <Route
              path={`${lang}/rules`}
              render={() => <InternShipRules lang={lang} />}
            />
            <Route
              path={`${lang}/about`}
              render={() => <About lang={lang} />}
            />
            {update !== false && (
              <Route path={"*"} render={() => <ErrorPage />} />
            )}
          </Switch>
        </Suspense>
      </Main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
