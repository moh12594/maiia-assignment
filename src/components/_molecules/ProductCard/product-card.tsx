import React, { ReactElement } from 'react';

import Styled from './product-card.styled';
import Picture from '../../_atoms/Picture/picture';

interface IProps {
  id?: number
  title: string
  thumbnailUrl: string
  addToCart?: any;
  removeFromCart?: any;
}

function ProductCart({
  title,
  thumbnailUrl,
  addToCart,
  removeFromCart,
  id,
}: IProps): ReactElement {
  const handleAdd = () => {
    addToCart(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <Styled.ProductCard>
      <Picture src={thumbnailUrl} alt={title} />
      <Styled.ProductDetails>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Buttons>
          <Styled.AddToCartButton onClick={handleRemove} type="button">-</Styled.AddToCartButton>
          <Styled.AddToCartButton onClick={handleAdd} type="button">+</Styled.AddToCartButton>
        </Styled.Buttons>
      </Styled.ProductDetails>
    </Styled.ProductCard>
  );
}

export default ProductCart;
