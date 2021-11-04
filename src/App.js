import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Main from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Title from "./title/title";

// pages
const HomePage = lazy(() => import("./pages/homePage"));

function App() {
  return (
    <div className="App">
      <Title>
        <title>Bolluq</title>
      </Title>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
