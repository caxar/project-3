import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Home from "./components/Home";

import "./App.css";
import Header from "./components/Home/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
