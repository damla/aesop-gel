import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

import Heading from '~/components/elements/Heading';

const title = 'React with Webpack';

ReactDOM.render(
  <div className={styles.base}>
    {title} <Heading level="3">Heading</Heading>
  </div>,

  document.getElementById('app'),
);

module.hot.accept();
