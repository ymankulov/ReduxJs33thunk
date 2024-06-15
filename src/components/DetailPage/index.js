import React from "react";
import { useSelector } from "react-redux";

function DetailPage(props) {
  const { detail } = useSelector((s) => s);
  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="w-[250px] p-[20px] h-[400px] bg-slate-100 rounded-[15px] flex flex-col justify-between items-center gap-[20px]">
            <img className="w-[150px] h-[200px]" src={detail.image} alt="" />
            <div className="flex">
              <div
                style={{
                  background: detail.rating.rate >= 1 ? "gold" : "grey",
                }}
                className="stars"
              ></div>
              <div
                style={{
                  background: detail.rating.rate >= 2 ? "gold" : "grey",
                }}
                className="stars"
              ></div>
              <div
                style={{
                  background: detail.rating.rate >= 3 ? "gold" : "grey",
                }}
                className="stars"
              ></div>
              <div
                style={{
                  background: detail.rating.rate >= 4 ? "gold" : "grey",
                }}
                className="stars"
              ></div>
              <div
                style={{
                  background: detail.rating.rate >= 5 ? "gold" : "grey",
                }}
                className="stars"
              ></div>
            </div>
            <h2 className="h-[40px] truncate w-[200px]">{detail.title}</h2>
            <span>{detail.price}$</span>
          </div>
          <div className="detail">
            <p>{detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
