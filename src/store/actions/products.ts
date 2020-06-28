import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ROOT_API } from '../../constants/api/routes';
import { IGetProducts, ISetError } from '../reducers/products';
import { IProduct } from '../../types/product';
import { SET_PRODUCTS_ERRORS, GET_PRODUCTS } from '../constants/products';

export const getProducts: ActionCreator<ThunkAction<
// The type of the last action to be dispatched - will always be promise<T> for async actions
Promise<IGetProducts | ISetError>,
// The type for the data within the last action
IProduct[],
// The type of the parameter for the nested function
null,
// The type of the last action to be dispatched
IGetProducts | ISetError
>> = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(`${ROOT_API}`);
    const products = await response.json();
    const getProductsAction: IGetProducts = {
      products,
      type: GET_PRODUCTS,
    };
    return dispatch(getProductsAction);
  } catch (error) {
    const setErrorAction: ISetError = {
      error: error.message,
      type: SET_PRODUCTS_ERRORS,
    };
    return dispatch(setErrorAction);
  }
};
