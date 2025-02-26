import React from 'react'
import "./Header.css";
import { ContextLanguage } from "../context/LanguageContexts";
import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";


const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const { dilDegistir, content } = useContext(ContextLanguage);
  
  const changeLanguage = () => {
    dilDegistir("tr");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="name">M</div>
      <div className="links">
        <a href="" className="link">Skills</a>
        <a href="" className="link">Project</a>
        <a href="" className="link">Hire Me</a>

        <button onClick={toggleDarkMode}>
          {darkMode ?   document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark")}
        </button>

        <button onClick={changeLanguage}>
          Dil Değiştir
        </button>
      </div>
    </div>
  );
}

export default Header;
