import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import classnames from "classnames";
import {
  SiIfood
} from "react-icons/si";
import { MdOutlineTakeoutDining }
  from "react-icons/md";
import { MdOutlineDining } from "react-icons/md";

import { type } from "@testing-library/user-event/dist/type";




const hello = 2;
const Mobileview = () => {
  const [allTypes, setallTypes] = useState([
    {
      id: "dellivery",
      icon: <MdOutlineDining />,
      name: "dellivery",
      isActive: false,
    },
    {
      id: "dine",
      icon: <MdOutlineTakeoutDining />,
      name: "dineout",
      isActive: false,
    },
    {
      id: "night",
      icon: <MdOutlineDining />,
      name: "nightlife",
      isActive: false,
    },
    {
      id: "nu",
      icon: <MdOutlineDining />,
      name: "nutri",
      isActive: false,
    },
  ]);
  const { type } = useParams();
  useEffect(() => {
    if (type) {
      const updateTypes = allTypes.map((item) => {
        if (item.id === type) {
          return {
            ...item, isActive: true
          };
        }
        return item;

      })
    }
  })
  if (hello === 2) {
    return (
      <>
        <div className=" lg:hidden bg-white shadow-lg  p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 borde">
          <div className="flex flex-col justify-center item-center text-xl">
            <MdOutlineDining />
            <h3>dinner</h3>
          </div>
          <div className="flex flex-col justify-center item-center text-xl">
            <MdOutlineDining />
            <h3>dinner</h3>
          </div>
          <div className="flex flex-col justify-center item-center text-xl">
            <MdOutlineTakeoutDining />
            <h3>dinner</h3>
          </div>
          <div className="flex flex-col justify-center item-center text-xl">
            <SiIfood />
            <h3> lifes  </h3>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-xl text-red-600 "
                  : "flex flex-col items-center text-xl "
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full h-2 border-t-2 border-red-600"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const Large = () => {
  if (hello === 2) {
    return (
      <>
        {" "}
        <div className="px-40 p-">
          {" "}
          <div className=" flex items-center w-full justify-around">
            <div classname="flex justify-center item-center">
              <div className="flex item-center w-12 h-12 bg-grey-400 p-2 rounded-full   gap-2">
                <div className="w-full h-ful " />
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                  alt="delivery"
                  className="w-full h-full"
                />
                <h2 className="flex text-xl ">delivery</h2>
              </div>
            </div>
            <div classname="flex justify-center item-center">
              <div className="flex item-centerflex item-center w-12 h-12 bg-grey-400 p-2 rounded-full">
                <div className="w-full h-ful " />
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  alt="delivery"
                  className="w-full h-full"
                />
                <h2 className="flex text-xl">dining out</h2>
              </div>
            </div>
            <div classname="flex justify-center item-center">
              <div className="flex item-center w-12 h-12 bg-grey-400 p-2 rounded-full gap-3 ">
                <div className="w-full h-ful " />
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                  alt="nightlifdee"
                  className="w-full h-full"
                />
                <h2 className="flex text-xl">nightlifdee</h2>
              </div>
            </div>
            <div classname="flex justify-center item-center">
              <div className="flex item-center w-12 h-12 bg-grey-400 p-2 rounded-full gap-3 ">
                <div className="w-full h-ful " />
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                  alt="delivery"
                  className="w-full h-full"
                />
                <h2 className="flex text-xl">nutri</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


 

};
const Food = () => {
  return (
    <>
      <div>
        <Mobileview />
        <Large />
      </div>
    </>
  );
};
export default Food;