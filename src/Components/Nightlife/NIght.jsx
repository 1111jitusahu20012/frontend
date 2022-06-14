import React from "react";
import Slider from "react-slick";

// components
import PictureCarousalCard from "./Picturecarouso";
import { NextArrow, PrevArrow } from "../Carsouel";

const NightCarousal = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,}
   return (
    <div className="w-full">
      <Slider {...settings}>
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
      </Slider>
    </div>
  );
};
export default NightCarousal;