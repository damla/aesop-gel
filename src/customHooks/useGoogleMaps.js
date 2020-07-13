import { useEffect, useState } from 'react';
import GoogleMapsLoader from 'google-maps';

const loadGoogleMapsAsync = loader =>
  new Promise(resolve => {
    loader.load(google => {
      resolve(google);
    });
  });

export const useGoogleMap = (apiKey, options = { libraries: ['places'] }) => {
  const [googleMap, setGoogleMap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGoogleMap = async () => {
      setIsLoading(true);

      const { languageCode, libraries, regionCode } = options;

      GoogleMapsLoader.KEY = apiKey;
      GoogleMapsLoader.LIBRARIES = libraries;

      if (languageCode) {
        GoogleMapsLoader.LANGUAGE = languageCode;
      }

      if (regionCode) {
        GoogleMapsLoader.REGION = regionCode;
      }

      setGoogleMap(await loadGoogleMapsAsync(GoogleMapsLoader));
      setIsLoading(false);
    };

    loadGoogleMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { googleMap, isLoading };
};

export default useGoogleMap;
