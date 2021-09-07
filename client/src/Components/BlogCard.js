import React from "react";
import product from "../Assets/download.jpg";

export default function BlogCard() {
  return (
    <div className="blog__card">
      <img src={product} alt="blog__img" className="blog__card__img" />
      <div className="blog__card__content">
        <div className="blog__card__content__heading">
          The easiest way to break
        </div>
        <div className="blog__card__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab
          unde esse optio id mollitia facilis adipisci, facere minus dicta.
        </div>
      </div>
    </div>
  );
}
