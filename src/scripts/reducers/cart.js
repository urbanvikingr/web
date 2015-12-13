"use strict";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT
} from "../actions/cart_actions";

const initialState = {
  products: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        // Add single product to products
        product: action.data
      };

    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        // Remove single product from products
        id: action.id
      };

    default:
      return state;
  }
};

export default cart;
