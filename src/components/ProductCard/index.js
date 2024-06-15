import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const ProductCard = ({ el }) => {
  const { favorite } = useSelector((s) => s);
  let someFavorite = favorite.some((fav) => fav.id === el.id);
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-[250px] cursor-pointer p-[20px] h-[400px] bg-slate-100 rounded-[15px] flex flex-col justify-between items-center gap-[20px]">
      <img className="w-[150px] h-[200px]" src={el.image} alt="" />
      <div className="flex">
        <div
          style={{
            background: el.rating.rate >= 1 ? "gold" : "grey",
          }}
          className="stars"
        ></div>
        <div
          style={{
            background: el.rating.rate >= 2 ? "gold" : "grey",
          }}
          className="stars"
        ></div>
        <div
          style={{
            background: el.rating.rate >= 3 ? "gold" : "grey",
          }}
          className="stars"
        ></div>
        <div
          style={{
            background: el.rating.rate >= 4 ? "gold" : "grey",
          }}
          className="stars"
        ></div>
        <div
          style={{
            background: el.rating.rate >= 5 ? "gold" : "grey",
          }}
          className="stars"
        ></div>
      </div>
      <h2
        className="h-[40px] truncate w-[200px]"
        onClick={() => {
          nav("/detail");
          dispatch({ type: "DETAIL", payload: el });
        }}
      >
        {el.title}
      </h2>
      <span>{el.price}$</span>
      <div className="flex items-center gap-[40px]">
        <a
          style={{
            color: someFavorite ? "red" : "gray",
          }}
          onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: el })}
          className=""
        >
          <FaHeart />
        </a>
        <button
          onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: el })}
          className=""
        >
          <SlBasket />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
