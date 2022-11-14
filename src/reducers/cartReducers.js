import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // data in the payload or product
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      // const existItem = state.cartItems.find((item) => {
      //   if (x != null) {
      //     return x.product === existItem.product ? item : x;
      //   } else {
      //     return x;
      //   }
      // });

      // if (!existItem) {
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems, item],
      //   };
      // } else {
      //   return;
      //   // if item does not exist
      // }
      return {
        // ...state,
        // cartItems: existItem
        //   ? state.cart.map((item) => item.id === action.payload.id)
        //     ? { ...state, cartItems: [...state.cartItems, item] }
        //     : item
        //   : [...state.cart, { ...item, item }],
      };

    default:
      return state;
  }
};
