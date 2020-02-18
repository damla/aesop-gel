import React from 'react';

export const useOverflowHidden = isVisible => {
  const [isOverflowHidden, setIsOverflowHidden] = React.useState(false);

  const hidden = React.useCallback(() => {
    if (typeof document !== 'undefined') {
      if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
        setIsOverflowHidden(true);
      }
    }
  }, []);

  const reset = React.useCallback(() => {
    if (typeof document !== 'undefined' && isOverflowHidden) {
      document.body.style.overflow = 'unset';
    }
  }, [isOverflowHidden]);

  React.useEffect(() => {
    if (isVisible) {
      hidden();
    } else {
      reset();
    }

    return function cleanUp() {
      reset();
    };
  }, [hidden, isVisible, reset]);
};

export default useOverflowHidden;
