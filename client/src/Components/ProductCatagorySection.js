import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCatagorySection() {
  return (
    <div className="poroduct__catagory__section">
      <div className="poroduct__catagory__section__header">
        <div className="poroduct__catagory__section__header__heading">
          Woman's
        </div>
        <div className="poroduct__catagory__section__header__filters">
          <button className="poroduct__catagory__section__header__filter">
            New Arrivals
          </button>
          <button className="poroduct__catagory__section__header__filter">
            Special
          </button>
          <button className="poroduct__catagory__section__header__filter">
            Bestsellers
          </button>
          <button className="poroduct__catagory__section__header__filter">
            Most Viewed
          </button>
          <button className="poroduct__catagory__section__header__filter">
            Featured Products
          </button>
        </div>
      </div>
      <div className="poroduct__catagory__section__content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <a href="#" className="poroduct__catagory__section__link">
        See All
      </a>
    </div>
  );
}
