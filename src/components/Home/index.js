import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((s) => s);
  const getUser = () => {
    return async (dispatch) => {
      const res = await axios(`https://jsonplaceholder.typicode.com/users`);
      const { data } = res;
      dispatch({ type: "GET_USER", payload: data });
    };
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(users, "use");
  return (
    <div>
      <div className="container">
        <h1>HOME</h1>
      </div>
    </div>
  );
};

export default Home;
