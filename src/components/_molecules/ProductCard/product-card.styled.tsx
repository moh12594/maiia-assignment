import styled from 'styled-components';
import colors from '../../../styles/constants/colors';

const ProductCard = styled.li`
  width: 15rem;
  position: relative;
  box-shadow: 0 0.2rem 0.7rem #dfdfdf;
  margin: 5rem 1.2rem;
  background: #fafafa;
`;

const ProductDetails = styled.div`
  padding: 8px;
`;

const Title = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddToCartButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 8px;
  background-color: ${colors.primary};
  margin: 0 4px;
`;

const Styled = {
  ProductCard,
  ProductDetails,
  Title,
  Buttons,
  AddToCartButton,
};

export default Styled;
