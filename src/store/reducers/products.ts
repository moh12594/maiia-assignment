import { Reducer } from 'react';
import { Action } from 'redux';
import { GET_PRODUCTS, SET_PRODUCTS_ERRORS } from '../constants/products';
import { IProduct } from '../../types/product';

interface IProductsState {
  items: IProduct[]
  isLoading: boolean
  error: string | null
}

export interface IGetProducts
  extends Action<'GET_PRODUCTS'> {
  products: IProduct[];
}

export interface ISetError
  extends Action<'SET_PRODUCTS_ERRORS'> {
  error: string;
}

export type ProductsActions =
  | IGetProducts
  | ISetError;

const productsState: IProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const products: Reducer<IProductsState, ProductsActions> = (state = productsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        items: action.products,
      };
    case SET_PRODUCTS_ERRORS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default products;
