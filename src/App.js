import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import "./App.css";
import Home from "./Components/Home";
import Externals from "./Components/Externals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/external" element={<Externals />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
