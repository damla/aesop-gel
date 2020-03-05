import { useEffect, useState } from 'react';

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
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
    return () => observer.unobserve(ref.current);
  }, []);

  return isVisible;
};
