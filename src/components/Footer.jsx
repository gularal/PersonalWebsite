import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Let’s work together on your next product.</p>
        <a href="mailto:almilasucode@gmail.com" className="email">
          👉 margarethamilton@gmail.com
        </a>
      </div>
      <div className="footer-links">
        <a href="#" className="link">Personal Blog</a>
        <a href="#" className="link">Github</a>
        <a href="#" className="link">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
