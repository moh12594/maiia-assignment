import React, { useMemo, ReactElement } from 'react';

import Styled from './cart.styled';
import { IProduct } from '../../../types/product';

interface IProps {
  products?: IProduct[]
  cartItems?: any
  className?: string
}

interface IProductInCart extends IProduct {
  quantity: number
}

function getCartFromProducts({ products, cartItems }: IProps): IProductInCart[] {
  const output: IProductInCart[] = [];
  if (products && cartItems) {
    Object.keys(cartItems).forEach((itemId: string) => {
      const productAdded = products.find((product) => product.id === +itemId);
      if (productAdded && +cartItems[itemId].quantity > 0) {
        output.push({
          albumId: productAdded.albumId,
          id: productAdded.id,
          title: productAdded.title,
          url: productAdded.url,
          thumbnailUrl: productAdded.thumbnailUrl,
          quantity: +cartItems[itemId].quantity,
        });
      }
    });
  }
  return output;
}

function Cart({
  products,
  cartItems,
  className,
}: IProps): ReactElement {
  const itemsToDisplay = useMemo(
    () => getCartFromProducts({ products, cartItems }),
    [products, cartItems],
  );

  return (
    <Styled.Cart className={className}>
      <h3>Products in cart:</h3>
      {itemsToDisplay.length ? itemsToDisplay.map((item) => (
        <Styled.CartItem key={item.id}>
          <Styled.CartItemTitle>{item.title}</Styled.CartItemTitle>
          <p>{item.quantity}</p>
        </Styled.CartItem>
      )) : (
        <div>No items were added to the cart</div>
      )}
    </Styled.Cart>
  );
}

export default Cart;
