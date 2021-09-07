import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Search,
  Globe,
  User,
  ShoppingCart,
  X,
} from "react-feather";

function SearchPanel() {
  return (
    <div className="panel__wrapper">
      <div className="panel__side__bar">
        <div className="panel__side__bar__header">
          <div className="panel__side__bar__header__heading">Search</div>
          <button className="panel__side__bar__header__button">
            <X size={18} color="currentColor" />
          </button>
        </div>
        <div className="panel__side__bar__content search__panel">
          <form action="" className="search__panel__form">
            <select name="" id="" className="search__panel__catagory__selector">
              <option value="">All Catagory</option>
              <option value="">Women</option>
              <option value="">Men</option>
              <option value="">Beauty</option>
              <option value="">Accessories</option>
            </select>

            <div className="search__panel__input__box">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="search__panel__input__field"
              />
              <button className="search__panel__input__button">
                <Search size={18} color="currentColor" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [searchPanel, setSearchPanel] = useState(true);
  const [languagePanel, setLanguagePanel] = useState(false);
  const [authPanel, setAuthPanel] = useState(false);
  const [cartPanel, setCartPanel] = useState(false);
  return (
    <header className="header">
      <div className="header__top__bar">
        <div className="header__top__bar__left">
          <div className="header__top__bar__link">
            <Phone size={18} color="currentColor" />
            <span>+92 336 23256546</span>
          </div>
          <div className="header__top__bar__link">
            <MapPin size={18} color="currentColor" />
            <span>+92 336 23256546</span>
          </div>
          <div className="header__top__bar__link">
            <Clock size={18} color="currentColor" />
            <span>+92 336 23256546</span>
          </div>
        </div>
        <div className="header__top__bar__right">
          <a href="#" className="header__top__bar__link__icon">
            <Facebook size={18} color="currentColor" />
          </a>
          <a href="#" className="header__top__bar__link__icon">
            <Twitter size={18} color="currentColor" />
          </a>
          <a href="#" className="header__top__bar__link__icon">
            <Instagram size={18} color="currentColor" />
          </a>
        </div>
      </div>
      <div className="header__bottom__bar">
        <a href="#" className="brand__name">
          ShopEco
        </a>
        <nav className="nav">
          <a href="#" className="nav__link">
            About Us
          </a>
          <a href="#" className="nav__link">
            Woman
          </a>
          <a href="#" className="nav__link">
            Men
          </a>
          <a href="#" className="nav__link">
            Beauty
          </a>
          <a href="#" className="nav__link">
            Accessories
          </a>
          <a href="#" className="nav__link">
            Blog
          </a>
          <a href="#" className="nav__link">
            Contact
          </a>
        </nav>
        <div className="header__bottom__bar__buttons">
          <button className="header__bottom__bar__icon">
            <Search size={18} color="currentColor" />
          </button>
          <button className="header__bottom__bar__icon">
            <Globe size={18} color="currentColor" />
          </button>
          <button className="header__bottom__bar__icon">
            <User size={18} color="currentColor" />
          </button>
          <button className="header__bottom__bar__icon">
            <div className="header__bottom__bar__icon__badge">1</div>
            <ShoppingCart size={18} color="currentColor" />
          </button>
        </div>
      </div>
      {searchPanel ? <SearchPanel /> : null}
      {languagePanel ? <SearchPanel /> : null}
      {authPanel ? <SearchPanel /> : null}
      {cartPanel ? <SearchPanel /> : null}
    </header>
  );
}
