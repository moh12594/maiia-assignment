import React, { ReactElement, useEffect } from 'react';
import { IProduct } from '../../../types/product';
import { IGetProducts, ISetError } from '../../../store/reducers/products';
import ProductCard from '../../_molecules/ProductCard/product-card';

import Styled from './products-list.styled';

interface IProps {
  products: IProduct[]
  getProducts: () => Promise<IGetProducts | ISetError>;
  addItemToCart: any;
  removeItemFromCart: any;
  className?: string
}

function ProductsList({
  products,
  getProducts,
  addItemToCart,
  removeItemFromCart,
  className,
}: IProps): ReactElement {
  useEffect(() => {
    if (getProducts) {
      getProducts();
    }
  }, []);

  return (
    <Styled.ProductsList className={className}>
      {products && products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          id={product.id}
          thumbnailUrl={product.thumbnailUrl}
          addToCart={addItemToCart}
          removeFromCart={removeItemFromCart}
        />
      ))}
    </Styled.ProductsList>
  );
}

export default ProductsList;
