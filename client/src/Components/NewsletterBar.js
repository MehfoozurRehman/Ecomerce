import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

export default function NewsletterBar() {
  return (
    <div className="newsletter__bar">
      <div className="newsletter__bar__heading">Be in touch with us</div>
      <form className="newsletter__bar__form">
        <input
          type="text"
          placeholder="Enter you email"
          className="newsletter__bar__form__input"
        />
        <button className="newsletter__bar__form__button">Join Us</button>
      </form>
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
  );
}
