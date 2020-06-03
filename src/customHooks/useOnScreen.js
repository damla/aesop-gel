import { useEffect, useState } from 'react';

const hasIntersectionObserver =
  'IntersectionObserver' in window ||
  'IntersectionObserverEntry' in window ||
  ('IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype);

export const useOnScreen = (ref, threshold = 0, rootMargin = '0px') => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    let observer = null;
    const currentRef = ref.current;

    if (!hasIntersectionObserver) {
      setIsOnScreen(true);
    } else {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsOnScreen(entry.isIntersecting);
            }
          });
        },
        {
          rootMargin,
          threshold,
        },
      );

      observer.observe(currentRef);
    }

    return function cleanUp() {
      if (hasIntersectionObserver) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin, threshold]);

  return isOnScreen;
};

export default useOnScreen;
