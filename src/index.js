import React from 'react';
import ReactDOM from 'react-dom';
import '~/styles/base.module.css';

import CarouselFixture from '~/components/Carousel/Carousel.fixture';
import Carousel from '~/components/Carousel';

/**
 * Set up context, export these from host files (`/context/`)
 */
export const ThemeContext = React.createContext(null);

export const EventHandlersContext = React.createContext({});

const App = () => {
  return (
    <div>
      <Carousel
        introduction={CarouselFixture.introduction}
        slides={CarouselFixture.slides}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
