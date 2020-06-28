import { Dispatch } from 'redux';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cart';

export function addItemToCart(productId: number) {
  return (dispatch: Dispatch, getState: any) => {
    const { cart } = getState();
    const quantity = cart.items[productId] && cart.items[productId].quantity > 0
      ? cart.items[productId].quantity + 1 : 1;
    return dispatch({
      type: ADD_ITEM_TO_CART,
      items: { [productId]: { quantity } },
    });
  };
}

export function removeItemFromCart(productId: number) {
  return (dispatch: Dispatch, getState: any) => {
    const { cart } = getState();
    const quantity = cart.items[productId] && cart.items[productId].quantity > 0
      ? cart.items[productId].quantity - 1 : 0;
    return dispatch({
      type: REMOVE_ITEM_FROM_CART,
      items: { [productId]: { quantity } },
    });
  };
}
