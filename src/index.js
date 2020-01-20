import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
// import '~/styles/base.module.css';

import AddToCartButtonFixture from '~/components/elements/AddToCartButton/AddToCartButton.fixture';
import AddToCartButton from '~/components/elements/AddToCartButton';

import ProductTemplateFixture from '~/components/templates/ProductTemplate/ProductTemplate.fixture';
import ProductTemplate from '~/components/templates/ProductTemplate';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOnClick = () => {
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.base}>
      <ProductTemplate data={ProductTemplateFixture.data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
