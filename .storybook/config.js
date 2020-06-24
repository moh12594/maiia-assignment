import { addDecorator } from '@storybook/react';
import React from 'react';

import GlobalStyles from '../src/components/AppContainer/global.styled';

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);
