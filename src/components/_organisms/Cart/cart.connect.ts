import { connect } from 'react-redux';
import { ICartState } from '../../../store/reducers/cart';
import Cart from './cart';
import { IProductsState } from '../../../store/reducers/products';

interface IState {
  cart: ICartState
  products: IProductsState
}

const mapStateToProps = ({ cart, products }: IState) => ({
  cartItems: cart.items,
  products: products.items,
});

export default connect(
  mapStateToProps,
  null,
)(Cart);
