import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">Company logo</div>
        <div className="header__buttons">
          <Link to="/cart" className="header__cta">
            Cart
          </Link>
          <Link to="/" className="header__cta">
            Login
          </Link>
        </div>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}
