import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProAxios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  let nav = useNavigate();
  const { product } = useSelector((s) => s);

  function getProduct() {
    return async (dispatch) => {
      let responce = await ProAxios(`https://fakestoreapi.com/products/`);
      let { data } = responce;
      dispatch({ type: "GET_PRODUCT", payload: data });
    };
  }

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  console.log(product);
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl my-[20px]">Popular Products</h1>
            <select
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              name=""
              id=""
            >
              <option value="expensive to cheap">Expensive to cheap</option>
              <option value="cheap to expensive">cheap to expensive</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-[40px]">
            {product.map((el) => (
              <ProductCard el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
