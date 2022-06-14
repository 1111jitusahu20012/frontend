import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

const Moblenav = () => {
  return (
    <div className="py-4 px-2 flex justify-between shadow-md w-full gap-3 md:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div class="flex item-center gap-3">
        <button className="bg-red-900 text-white py-2 px-3 rounded-full">
          use app
        </button>
        <span className="border p-2 border-gray-300 text-red-900 rounded-full">
          <FaRegUser />
        </span>
      </div>
    </div>
  );
};
const Mediumnav = () => {
  return (
    <>
      <div className="hidden w-full items-center justify-around  border border-gray-100 md:flex lg:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div classname="w-full bg-white shadow-md px-3 py-4 flex items-center gap-3 border-3 border-grey-400 rounded">
          <div className="flex item-center gap-2 border border-bg-gray-400 rounded-full">
            <span className="text-red-500 flex item-center gap-3">
             <div className="p-2"> <GoLocation /></div>
              <input type="text" placeholder="mylocation here" />
              <div className="p-2">
                <BsChevronDown />
              </div>
            </span>
            <div className="flex item-center gap-2 border  p-1">
              <RiSearchLine />
              <input
                type="search"
                placeholder="search for rest"
                className="flex items-center"
              />
            </div>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <buttonn className="text-grey-500 hover:text-red-400 text-xl">
            Log in
          </buttonn>
          <button className="text-grey-500 hover:text-red-400 text-xl">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
const Largenav = () => {
  return (
    <>
      <div className="hidden w-full items-center justify-evenly  border border-gray-100 lg:flex md:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div classname="w-full bg-white shadow-md px-3 py-4 flex items-center gap-3 border-3 border-grey-400 rounded">
          <div className="flex item-left gap-2 border border-bg-gray-400 rounded-full w-full">
            <span className="text-red-500 flex item-center gap-3">
              <div className="p-2">
                {" "}
                <GoLocation />
              </div>
              <input type="text" placeholder="mylocation here" />
              <div className="p-2">
                <BsChevronDown />
              </div>
            </span>
            <div className="flex item-center gap-2 border  p-1">
              <RiSearchLine />
              <input
                type="search"
                placeholder="search for rest"
                className="flex items-center"
              />
            </div>
          </div>
        </div>
        <div className="flex item-center border gap-10">
          <buttonn className="text-grey-500 hover:text-red-400 text-xl">
            Log in
          </buttonn>
          <button className="text-grey-500 hover:text-red-400 text-xl">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  return (
    <>
      <nav className=" pt-4 pb-3 flex bg-white shadow-md w-full items-center">
        <Moblenav />
        <Mediumnav />
        <Largenav />
      </nav>
    </>
  );
};

export default Navbar ;
