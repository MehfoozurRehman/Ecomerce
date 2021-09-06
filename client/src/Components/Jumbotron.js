import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import product from "../Assets/download.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Jumbotron() {
  return (
    <div className="main__home__jumbotron">
      <div className="main__home__jumbotron__main__carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={95.2}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <img
                src={product}
                alt="catagory__image"
                className="main__home__jumbotron__main__carousel__img"
              />
            </Slide>
            <Slide index={1}>
              <img
                src={product}
                alt="catagory__image"
                className="main__home__jumbotron__main__carousel__img"
              />
            </Slide>
            <Slide index={2}>
              <img
                src={product}
                alt="catagory__image"
                className="main__home__jumbotron__main__carousel__img"
              />
            </Slide>
          </Slider>
          <ButtonBack className="main__home__jumbotron__main__carousel__button__back">
            <ChevronLeft size={18} color="currentColor" />
          </ButtonBack>
          <ButtonNext className="main__home__jumbotron__main__carousel__button__next">
            <ChevronRight size={18} color="currentColor" />
          </ButtonNext>
        </CarouselProvider>
      </div>
      <div className="main__home__jumbotron__popular__catagory__wrapper">
        <div className="main__home__jumbotron__popular__catagory__wrapper__row">
          <a href="" className="main__home__jumbotron__popular__catagory">
            <img
              src={product}
              alt="catagory__image"
              className="main__home__jumbotron__popular__catagory__img"
            />
            <div className="main__home__jumbotron__popular__catagory__content">
              <div className="main__home__jumbotron__popular__catagory__content__text">
                Woman
              </div>
            </div>
          </a>
          <div className="main__home__jumbotron__popular__catagory__divider"></div>
          <a href="" className="main__home__jumbotron__popular__catagory">
            <img
              src={product}
              alt="catagory__image"
              className="main__home__jumbotron__popular__catagory__img"
            />
            <div className="main__home__jumbotron__popular__catagory__content">
              <div className="main__home__jumbotron__popular__catagory__content__text">
                Men
              </div>
            </div>
          </a>
        </div>
        <div className="main__home__jumbotron__popular__catagory__wrapper__row">
          <a href="" className="main__home__jumbotron__popular__catagory">
            <img
              src={product}
              alt="catagory__image"
              className="main__home__jumbotron__popular__catagory__img"
            />
            <div className="main__home__jumbotron__popular__catagory__content">
              <div className="main__home__jumbotron__popular__catagory__content__text">
                Accessories
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
