import { CART_ADD_ITEM } from "../constants/cartConstants";

export const CART_REDUCER = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) =>
        x.product === item.product ? item : x
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (x) => x.product === existItem.product
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
        // if item does not exist
      }
    default:
      return state;
  }
};
