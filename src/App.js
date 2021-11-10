import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";

// pages
const HomePage = lazy(() => import("./pages/homePage"));
const AboutUs = lazy(() => import("./pages/aboutUs"));
const Productions = lazy(() => import("./pages/productions"));
const ErrorPage = lazy(() => import("./pages/errorPage"));

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Title>
        <title>Bolluq</title>
      </Title>
      <Header headerId={pathname === "/" ? "homeHeader" : "inHeader"} />
      <Main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/productions" element={<Productions />} />
            
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
