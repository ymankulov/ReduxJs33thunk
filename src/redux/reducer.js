const initialState = {
  product: [],
  detail: JSON.parse(localStorage.getItem("details")) || {},
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };

    case "CATEGORY":
      if (action.payload === "expensive to cheap") {
        return {
          ...state,
          product: state.product.sort((a, b) => b.price - a.price),
        };
      } else if (action.payload === "cheap to expensive") {
        return {
          ...state,
          product: state.product.sort((a, b) => a.price - b.price),
        };
      } else if (action.payload === "A-Z") {
        return {
          ...state,
          product: state.product.sort((a, b) => a.title.localeCompare(b.title)),
        };
      } else if (action.payload === "Z-A") {
        return {
          ...state,
          product: state.product.sort((a, b) => b.title.localeCompare(a.title)),
        };
      }
    case "DETAIL":
      let det = action.payload;
      localStorage.setItem("details", JSON.stringify(det));
      return { ...state, detail: det };
    case "ADD_TO_FAVORITE":
      let someFav = state.favorite.some(
        (some) => some.id === action.payload.id
      );

      if (!someFav) {
        let fav = [...state.favorite, action.payload];
        localStorage.setItem("favorite", JSON.stringify(fav));
        return { ...state, favorite: fav };
      } else {
        let filtFav = state.favorite.filter(
          (el) => el.id !== action.payload.id
        );
        localStorage.setItem("favorite", JSON.stringify(filtFav));
        return { ...state, favorite: filtFav };
      }
    case "ADD_TO_BASKET":
      let bas = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(bas));
      return { ...state, basket: bas };
    case "DELETE_ON_BASKET":
      let del = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(del));
      return { ...state, basket: del };

    default:
      return state;
  }
};
