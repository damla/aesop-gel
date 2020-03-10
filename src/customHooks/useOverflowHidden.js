import { useCallback, useEffect, useState } from 'react';

export const useOverflowHidden = isVisible => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  const hidden = useCallback(() => {
    if (typeof document !== 'undefined') {
      if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
        setIsOverflowHidden(true);
      }
    }
  }, []);

  const reset = useCallback(() => {
    if (typeof document !== 'undefined' && isOverflowHidden) {
      document.body.style.overflow = 'unset';
    }
  }, [isOverflowHidden]);

  useEffect(() => {
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
