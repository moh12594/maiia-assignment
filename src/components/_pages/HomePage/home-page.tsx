import React, { ReactElement } from 'react';

import Styled from './home-page.styled';

function HomePage(): ReactElement {
  return (
    <Styled.HomePage>
      <Styled.SCart />
      <Styled.SProductsList />
    </Styled.HomePage>
  );
}

export default HomePage;
