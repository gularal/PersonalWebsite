
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

import Skils from "./components/Skils";
import { LanguageContexts } from './context/LanguageContexts'

import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
         
    <LanguageContexts>
 <Header />
 <Introduce />
  <Skils />
  <Profile />
  <Projects />
  <Footer />
 </LanguageContexts>
 <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
 </ThemeContext.Provider>
    </div>
  );
}

export default App;
