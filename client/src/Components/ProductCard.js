import React from "react";
import product from "../Assets/download.jpg";
import ReactStars from "react-rating-stars-component";

export default function ProductCard() {
  return (
    <div className="product__card">
      <div className="product__card__badge">50% off</div>
      <img src={product} alt="product__img" className="product__card__img" />
      <div className="product__card__content">
        <div className="product__card__content__product__name">
          Woman's track suite Q/24
        </div>
        <div className="product__card__content__row">
          <div className="product__card__content__product__price">Rs 3000</div>
          <ReactStars
            count={5}
            // onChange={() => {}}
            size={24}
            value={3}
            edit={false}
            color="#d3d3d3"
            activeColor="#ffae00"
          />
        </div>
      </div>
    </div>
  );
}
