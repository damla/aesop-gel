import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export const useWindowHasResized = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const windowIsDefined = typeof window !== 'undefined';

    const handleResize = debounce(() => {
      setWindowSize({
        height: windowIsDefined ? window.innerHeight : 0,
        width: windowIsDefined ? window.innerWidth : 0,
      });
    }, 400);

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
