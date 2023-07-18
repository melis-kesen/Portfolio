
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Preloader from "../src/components/Preloader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return <Router>
  <Preloader load={load} />
  <div className="App" id={load ? "no-scroll" : "scroll"}>
    <Navbar />
    <ScrollToTop />
  </div>
</Router>;
}
