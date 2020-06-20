import { createContext, useContext } from 'react';

const defaultValues = {
  googleMaps: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

export const GoogleMapsContextProvider = GoogleMapsContext.Provider;

export const useGoogleMapsContext = () => useContext(GoogleMapsContext);

export default {
  GoogleMapsContextProvider,
  useGoogleMapsContext,
};
