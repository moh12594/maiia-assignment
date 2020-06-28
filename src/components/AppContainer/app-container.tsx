import React, { ReactElement } from 'react';
import GlobalStyle from './global.styled';
import HomePage from '../_pages/HomePage/home-page';

function AppContainer(): ReactElement {
  return (
    <>
      <HomePage />
      <GlobalStyle />
    </>
  );
}

export default AppContainer;
