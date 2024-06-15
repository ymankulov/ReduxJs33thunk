import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import emptyfav from "../../assets/images/emptyFav.webp";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  console.log(favorite);
  return (
    <div className="py-[40px]">
      <div className="container">
        {favorite.length ? (
          <div className="">
            <h1 className="text-2xl text-center font-bold">
              Вам понравились эти товары!
            </h1>
            <div className=" flex overflow-scroll h-[70vh] items-center gap-[40px] flex-col justify-center">
              {favorite?.map((el) => (
                <ProductCard el={el} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center ">
            <img src={emptyfav} alt="empty" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
