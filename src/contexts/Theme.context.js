import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeContextProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export const useThemeContext = (propTheme, defaultTheme = 'dark') => {
  const themeContext = useContext(ThemeContext);
  return propTheme || themeContext || defaultTheme;
};

export default {
  ThemeContextProvider,
  useThemeContext,
};
