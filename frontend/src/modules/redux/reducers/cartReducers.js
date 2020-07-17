import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
} from "modules/redux/constant/cartConstant";

function cartReducers(
  state = { cartItems: [], shipping: {}, payment: {} },
  action
) {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );
      if (product) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === product.product ? item : cartItem
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };

    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== payload
        ),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: payload };
    case CART_SAVE_PAYMENT:
      return { ...state, payment: payload };
    default:
      return state;
  }
}

export { cartReducers };
