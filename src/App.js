import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import Men from "./components/Men";
import Women from "./components/Women";
import Product from "./components/Product";
import Contact from "./components/Contact";
import User from "./components/User";
import "./css/style.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
