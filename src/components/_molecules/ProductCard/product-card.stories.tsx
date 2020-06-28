import { storiesOf } from '@storybook/react';
import React from 'react';

import ProductCard from './product-card';

const product = {
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
};

storiesOf('Molecules/ProductCard', module)
  .add('default', () => (
    <div style={{ padding: '5rem' }}>
      <ProductCard
        title={product.title}
        thumbnailUrl={product.thumbnailUrl}
        addToCart={() => {}}
      />
    </div>
  ));
