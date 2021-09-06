import React from "react";
import FeatureBar from "../Components/FeatureBar";
import Jumbotron from "../Components/Jumbotron";
import ProductCatagorySection from "../Components/ProductCatagorySection";
import product from "../Assets/download.jpg";
import CollectionSection from "../Components/CollectionSection";

function SubscribtionForm() {
  return (
    <div className="subscribe__box">
      <form className="subscribe__form">
        <div className="subscribe__form__slogan">Special offer</div>
        <div className="subscribe__form__heading">
          Subscribe <br /> and <span>Get 10% OFF</span>
        </div>
        <input
          type="email"
          placeholder="Enter your eamil"
          className="subscribe__form__input"
        />
        <button className="subscribe__form__button">Subscribe</button>
      </form>
    </div>
  );
}

export default function HomeScreen() {
  return (
    <main className="main__home">
      <Jumbotron />
      <FeatureBar />
      <ProductCatagorySection />
      <ProductCatagorySection />
      <ProductCatagorySection />
      <CollectionSection />
      <SubscribtionForm />
    </main>
  );
}
