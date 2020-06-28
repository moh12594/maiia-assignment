import { ADD_ITEM_TO_CART } from '../constants/cart';

const cartState = {};

function cart(state = cartState, action: string) {
  switch (action) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default cart;
