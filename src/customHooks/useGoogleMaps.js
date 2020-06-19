import { useEffect, useState } from 'react';
import { Loader } from 'google-maps';

export const useGoogleMap = (apiKey, options = { libraries: ['places'] }) => {
  const [googleMap, setGoogleMap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGoogleMap = async () => {
      setIsLoading(true);

      const loader = new Loader(apiKey, options);

      setGoogleMap(await loader.load());
      setIsLoading(false);
    };

    loadGoogleMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { googleMap, isLoading };
};

export default useGoogleMap;
