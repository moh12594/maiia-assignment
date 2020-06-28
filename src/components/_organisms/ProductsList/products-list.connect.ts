import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { getProducts } from '../../../store/actions/products';
import { addItemToCart, removeItemFromCart } from '../../../store/actions/cart';
import { IProductsState } from '../../../store/reducers/products';
import ProductsList from './products-list';

interface IState {
  products: IProductsState
}

const mapStateToProps = ({ products }: IState) => ({
  products: products.items,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getProducts: () => dispatch(getProducts()),
  addItemToCart: (id: number) => dispatch(addItemToCart(id)),
  removeItemFromCart: (id: number) => dispatch(removeItemFromCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);
