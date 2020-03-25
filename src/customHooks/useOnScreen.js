import { useEffect, useState } from 'react';

const hasIntersectionObserver =
  'IntersectionObserver' in window ||
  'IntersectionObserverEntry' in window ||
  ('IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype);

export const useOnScreen = (ref, offset = '0px') => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
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
          rootMargin: offset,
        },
      );

      observer.observe(currentRef);
    }

    return () => {
      if (hasIntersectionObserver) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, offset]);

  return isOnScreen;
};

export default useOnScreen;
