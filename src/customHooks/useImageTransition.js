import { useEffect, useRef, useState } from 'react';

const windowIsDefined = typeof window !== 'undefined';

const useImageTransition = (image, ref, duration = 600) => {
  const [currentImage, setCurrentImage] = useState({});
  const [isImageActive, setIsImageActive] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    setIsImageActive(false);

    const handleOnImageLoad = () => {
      setIsImageActive(true);
    };

    if (windowIsDefined && ref.current) {
      timeout.current = window.setTimeout(() => {
        setCurrentImage(image);

        if (currentRef.complete) {
          handleOnImageLoad();
        } else {
          currentRef.addEventListener('load', handleOnImageLoad);
        }
      }, duration);
    }

    return function cleanup() {
      if (windowIsDefined) {
        window.clearTimeout(timeout.current);
      }

      currentRef.removeEventListener('load', handleOnImageLoad);
    };
  }, [duration, image, ref]);

  return [currentImage, isImageActive];
};

export default useImageTransition;
