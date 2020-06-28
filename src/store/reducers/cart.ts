import { Reducer } from 'react';
import { Action } from 'redux';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cart';

export interface ICartState {
  items: any
}

export interface IAddItemToCart
  extends Action<'ADD_ITEM_TO_CART'> {
  items: any;
}

export interface IRemoveItemFromCart
  extends Action<'REMOVE_ITEM_FROM_CART'> {
  items: any;
}

export type CartActions =
  | IAddItemToCart
  | IRemoveItemFromCart;

const cartState = {
  items: {},
};

const cart: Reducer<ICartState, CartActions> = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
    case REMOVE_ITEM_FROM_CART:
      return {
        items: { ...state.items, ...action.items },
      };
    default:
      return state;
  }
};

export default cart;
