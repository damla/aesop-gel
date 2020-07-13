import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import useGoogleMaps from '~/customHooks/useGoogleMaps';

const defaultValues = {
  googleMaps: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

export const GoogleMapsContextProvider = ({ apiKey, children, options }) => (
  <GoogleMapsContext.Provider value={useGoogleMaps(apiKey, options)}>
    {children}
  </GoogleMapsContext.Provider>
);

GoogleMapsContextProvider.propTypes = {
  apiKey: PropTypes.string,
  children: PropTypes.any,
  options: PropTypes.shape({
    libraries: PropTypes.arrayOf(PropTypes.string),
    regionCode: PropTypes.string,
    languageCode: PropTypes.string,
  }),
};

export const useGoogleMapsContext = () => useContext(GoogleMapsContext);

export default {
  GoogleMapsContextProvider,
  useGoogleMapsContext,
};
