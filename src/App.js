import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import DetailPage from "./components/DetailPage";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/detail"} element={<DetailPage />} />
        <Route path={"/favorite"} element={<Favorite />} />
        <Route path={"/basket"} element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
