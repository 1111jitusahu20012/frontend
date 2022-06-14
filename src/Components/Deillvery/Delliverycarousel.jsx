import React from 'react'
import { NextArrow, PrevArrow } from '../Carsouel';
import Dellivrycategory from './Dellivrycategory';

import Slider from 'react-slick';
const Delliverycarousel = () => {
  const categories = [
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
      title: "Home style",
    },
  ];  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className=" px-50">
        {" "}
        <h1>inspirationfor your order</h1>
        <div
          className="flex flex-wrap justify-evenly item-center py-7
       ">
          {categories.map((food) => (
            <Dellivrycategory {...food} />
          ))}
        </div>
        <div >
          <Slider {...settings}>
            {" "}
            {categories.map((food) => (
              <Dellivrycategory {...food} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Delliverycarousel;