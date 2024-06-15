import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="flex items-center justify-between ">
          <Link to={"/"} className="text-[40px] font-bold ">
            ShopVerse
          </Link>
          <div className="flex items-center gap-[40px]">
            <Link to={"/"} className="text-[24px] font-bold ">
              About
            </Link>
            <Link to={"/product"} className="text-[24px] font-bold ">
              Shop
            </Link>
            <Link to={"/"} className="text-[24px] font-bold ">
              Categories
            </Link>
            <Link to={"/"} className="text-[24px] font-bold ">
              Help
            </Link>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className=" relative">
              <a className="absolute text-[30px] top-[10px] left-[10px]">
                <IoSearchSharp />
              </a>
              <input
                type="text"
                placeholder="Search for “Phones”"
                className="text-[25px] rounded-[30px] bg-gray-400 placeholder:text-black py-[7px] pl-[50px]"
              />
            </div>
            <Link to={"/favorite"} className="text-[30px] ">
              <FaRegHeart />
            </Link>
            <Link to={"/basket"} className="text-[30px] ">
              <LuShoppingBag />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
