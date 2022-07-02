import { Routes, Route } from "react-router-dom";

import ProfileSelect from "./components/ProfileSelect/ProfileSelect";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import SurpriseMe from "./components/SurpriseMe/SurpriseMe";
import Categories from "./components/Categories/Categories";
import Source from "./components/Source/Source";
import Row from "./components/Row/Row";
import requests from "./requests/requests";

import "./App.css";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState({
    home: [],
    surpriseme: [],
    categories: [],
  });
  const [genreMovies, setGenreMovies] = useState([]);
  const [genreTV, setGenreTV] = useState([]);

  return (
    <div className="App">
      {/* <Routes>
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
              <Search />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Menu />
              <Home />
            </>
          }
        />
        <Route
          path="/surpriseme"
          element={
            <>
              <SurpriseMe />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Menu />
              <Categories />
            </>
          }
        />
        <Route
          path="/source"
          element={
            <>
              <Source />
            </>
          }
        />
      </Routes> */}
      {/* <Menu />
      <Row /> */}
    </div>
  );
}

export default App;
