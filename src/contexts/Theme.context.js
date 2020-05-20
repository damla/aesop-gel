import { createContext, useContext } from 'react';

export const defaultValues = {
  loginAndCartTheme: 'dark',
  navigationAndLogoTheme: 'dark',
  setLoginAndCartTheme: () => {},
  setNavigationAndLogoTheme: () => {},
};

const ThemeContext = createContext(defaultValues);

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => useContext(ThemeContext);

export default {
  ThemeContextProvider,
  useThemeContext,
};
