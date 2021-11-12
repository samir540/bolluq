import React, { Suspense, lazy, useEffect } from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";
import { resize } from "./helper/helper";
import HomePage from "./pages/home";

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

  useEffect(() => {
    resize();
  });

  return (
    <div className="App">
      <Title>
        <title>Bolluq</title>
      </Title>
      <Header headerId={pathname === "/" ? "homeHeader" : "inHeader"} />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/news" component={News} />
            <Route path="/productions" component={Productions} />
            <Route path="/productions/:id" component={ProductionsDetails} />
            <Route path="/branch" component={Branch} />
            <Route path="/internship" component={InternShip} />
            <Route path="/rules" component={InternShipRules} />
            <Route path="/about" component={About} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
