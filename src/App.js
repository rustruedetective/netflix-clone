import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { context } from "./components/Context/Context";
import ProfileSelect from "./components/ProfileSelect/ProfileSelect";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";
import SurpriseMe from "./components/SurpriseMe/SurpriseMe";
import Categories from "./components/Categories/Categories";
import Source from "./components/Source/Source";
import Row from "./components/Row/Row";
import Details from "./components/Details/Details";

import "./App.css";

function App() {
  const { data, setData } = useContext(context);
  const location = useLocation();

  useEffect(() => {
    setData(location.pathname);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProfileSelect />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Menu />
              <Search data={data} />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Menu />
              <Main data={data} />
            </>
          }
        />
        <Route
          path="/surprise"
          element={
            <>
              <SurpriseMe data={data} />
            </>
          }
        />
        <Route
          path="/category"
          element={
            <>
              <Menu />
              <Categories data={data} />
            </>
          }
        />
        <Route
          path="/source"
          element={
            <>
              <Menu />
              <Source />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
