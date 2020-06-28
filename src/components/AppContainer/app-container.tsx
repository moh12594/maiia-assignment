import React, { useEffect, FunctionComponent } from 'react';
import GlobalStyle from './global.styled';
import { IGetProducts, ISetError } from '../../store/reducers/products';

interface IProps {
  getProducts?: () => Promise<IGetProducts | ISetError>;
}

const AppContainer: FunctionComponent<IProps> = ({
  getProducts,
}: IProps) => {
  useEffect(() => {
    if (getProducts) {
      getProducts();
    }
  }, []);

  return (
    <>
      <main data-testid="app-container">
        Maiia asssignment
      </main>
      <GlobalStyle />
    </>
  );
};

export default AppContainer;
