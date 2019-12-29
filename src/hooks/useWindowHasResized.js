import React from 'react';
import debounce from 'lodash/debounce';

export const useWindowHasResized = () => {
  const [windowSize, setWindowSize] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    const windowIsDefined = typeof window !== 'undefined';

    const handleResize = debounce(() => {
      setWindowSize({
        height: windowIsDefined ? window.innerHeight : 0,
        width: windowIsDefined ? window.innerWidth : 0,
      });
    }, 600);

    if (windowIsDefined) {
      window.addEventListener('resize', handleResize);
    }

    return function cleanUp() {
      if (windowIsDefined) {
        window.removeEventListener('resize', handleResize);
      }
    };
  });

  return windowSize;
};

export default useWindowHasResized;
