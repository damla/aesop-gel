import { useEffect } from 'react';
import { KEYBOARD_CODES } from '~/constants';

export const useEscapeKeyListener = onKeyPress => {
  useEffect(() => {
    const detectEscapeKey = event => {
      if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
        onKeyPress(event);
      }

      return event;
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', detectEscapeKey, false);
    }

    return function cleanUp() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', detectEscapeKey, false);
      }
    };
  }, [onKeyPress]);
};

export default useEscapeKeyListener;
