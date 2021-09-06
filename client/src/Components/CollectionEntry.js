import React from "react";
import product from "../Assets/download.jpg";

export default function CollectionEntry() {
  return (
    <a href="#" className="collection__section__entry">
      <img
        src={product}
        alt="collection__section__entry__img"
        className="collection__section__entry__img"
      />
      <div className="collection__section__entry__content">
        <div className="collection__section__entry__content__entry">
          <div className="collection__section__entry__content__entry__heading">
            New Season
          </div>
          <div className="collection__section__entry__content__entry__description">
            LookBook collection <span>50% off</span>
          </div>
        </div>
      </div>
    </a>
  );
}
