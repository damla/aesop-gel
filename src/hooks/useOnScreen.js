import { useEffect, useState } from 'react';

const hasIntersectionObserver =
  'IntersectionObserver' in window ||
  'IntersectionObserverEntry' in window ||
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let observer = null;
    const currentRef = ref.current;

    if (!hasIntersectionObserver) {
      setVisible(true);
    } else {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(entry.isIntersecting);
            }
          });
        },
        {
          rootMargin,
        },
      );

      observer.observe(currentRef);
    }

    return () => {
      if (hasIntersectionObserver) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};
