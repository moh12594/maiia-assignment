import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';
import AppContainer from './app-container';

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
