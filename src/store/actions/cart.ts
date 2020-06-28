import { ADD_ITEM_TO_CART } from '../constants/cart';

export function addItemToCart(productId: number) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: { productId },
  };
}
