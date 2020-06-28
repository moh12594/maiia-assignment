import styled from 'styled-components';
import ProductsList from '../../_organisms/ProductsList/products-list.connect';
import Cart from '../../_organisms/Cart/cart.connect';

import { breakpoint } from '../../../styles/utils/breakpoint';

const HomePage = styled.main`
  padding: 3.2rem 4rem;

  ${breakpoint.large`
    padding: 5rem 12rem;
    display: flex;
  `}
`;

const SCart = styled(Cart)`
  width: calc(20% - 2rem);
  margin-right: 2rem;
`;

const SProductsList = styled(ProductsList)`
  width: 80%;
`;

const Styled = {
  HomePage,
  SCart,
  SProductsList,
};

export default Styled;
