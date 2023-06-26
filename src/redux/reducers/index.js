import { combineReducers } from "@reduxjs/toolkit";

import cartListReducer from "./cartList/cartList.slice";
import productReducer from "./productList/productList.slice";
import filtersReducer from "./filters/filters.slice";

const RootReducer = combineReducers({
	products: productReducer,
	carts: cartListReducer,
	filters: filtersReducer,
});

export default RootReducer;
