import { useEffect } from 'react';

const useScript = (url, id, dataSet) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.id = id;

    if (dataSet) {
      Object.keys(dataSet).forEach(attr => {
        script.dataset[attr] = dataSet[attr];
      });
    }

    document.body.appendChild(script);

    return function cleanUp() {
      document.body.removeChild(script);
    };
  }, [url, id, dataSet]);
};

export default useScript;
