import styled from 'styled-components';

const Cart = styled.div`
  font-size: 1.6rem;
  height: 100vh;
  background-color: #dedede;
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  border-bottom: 1px #eee solid;
  padding: 1.2rem 0;
  justify-content: space-between;
`;

const CartItemTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Styled = {
  Cart,
  CartItem,
  CartItemTitle,
};

export default Styled;
