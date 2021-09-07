import React from "react";

export default function SubscriptionForm() {
  return (
    <div className="subscribe__box">
      <form className="subscribe__form">
        <div className="subscribe__form__slogan">Special offer</div>
        <div className="subscribe__form__heading">
          Subscribe <br /> and <span>Get 10% OFF</span>
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="subscribe__form__input"
        />
        <button className="subscribe__form__button">Subscribe</button>
      </form>
    </div>
  );
}
