import { useEffect, useState, useRef } from 'react';

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

const useScript = ({
  src,
  id,
  dataSet,
  async = true,
  defer = false,
  onLoad,
  checkForExisting = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const count = useRef(0);
  count.current += 1;

  useEffect(() => {
    if (!isBrowser) return;

    if (checkForExisting) {
      const existing = document.querySelectorAll(`script[src="${src}"]`);
      if (existing.length > 0) {
        setIsLoading(false);
        return;
      }
    }

    const script = document.createElement('script');

    script.src = src;
    script.async = async;
    script.id = id;
    script.defer = defer;

    if (dataSet) {
      Object.keys(dataSet).forEach(attr => {
        script.dataset[attr] = dataSet[attr];
      });
    }

    // Object.keys(attributes).forEach(key => {
    //   if (script[key] === undefined) {
    //     script.setAttribute(key, attributes[key]);
    //   } else {
    //     script[key] = attributes[key];
    //   }
    // });

    const handleLoad = () => {
      setIsLoading(false);

      if (onLoad) {
        onLoad();
      }
    };
    const handleError = error => {
      setError(error);
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return function cleanUp() {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return [isLoading, error];
};

export default useScript;
