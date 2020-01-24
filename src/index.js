import React from 'react';
import ReactDOM from 'react-dom';
import '~/styles/base.module.css';

import ProductDetailFixture from '~/components/ProductDetail/ProductDetail.fixture';
import ProductDetail from '~/components/ProductDetail';

/**
 * Set up context, export these from host files (`/context/`)
 */
export const ThemeContext = React.createContext(null);

export const EventHandlersContext = React.createContext({});

const App = () => {
  return (
    <div>
      <ProductDetail data={ProductDetailFixture.data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
