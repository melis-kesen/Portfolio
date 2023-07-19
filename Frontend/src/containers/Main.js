import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import About from "./about/About";
//import SplashScreen from "./splashScreen/SplashScreen";
//import {splashScreen} from "../portfolio";
//import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

import "./Main.css";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {

  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
            <Header />
            <About />
    </div>
  );
};

export default Main;