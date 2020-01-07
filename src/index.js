import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
// import '~/styles/base.module.css';

// import AuxOpenCartButton from '~/components/elements/AuxOpenCartButton';
//
// import CarouselFixture from '~/components/layouts/Carousel/Carousel.fixture';
// import Carousel from '~/components/layouts/Carousel';

import List from '~/components/elements/List';

const foo = [{ content: 'Fragrance', id: 'fragrance' }, { content: 'Gifts' }];

console.log('foo', foo, foo.map);

const title = 'React with Webpack';

ReactDOM.render(
  <div className={styles.base}>
    {title}

    <List
      items={[{ content: 'Fragrance', id: 'fragrance' }, { content: 'Gifts' }]}
    />
  </div>,

  document.getElementById('app'),
);

module.hot.accept();
