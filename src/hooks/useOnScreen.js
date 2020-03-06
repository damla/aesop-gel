import { useEffect, useState } from 'react';

const hasIntersectionObserver =
  'IntersectionObserver' in window ||
  'IntersectionObserverEntry' in window ||
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasIntersectionObserver) {
      setVisible(true);
    } else {
      const observer = new IntersectionObserver(
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

      observer.observe(ref.current);
    }

    return () => {
      if (hasIntersectionObserver) {
        observer.unobserve(ref.current)
      }
    };
  }, []);

  return isVisible;
};
