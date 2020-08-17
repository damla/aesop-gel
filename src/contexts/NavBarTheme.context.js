import { createContext, useContext } from 'react';

export const defaultValues = {
  loginAndCartTheme: 'dark',
  navigationAndLogoTheme: 'dark',
  setLoginAndCartTheme: () => {},
  setNavigationAndLogoTheme: () => {},
};

const NavBarThemeContext = createContext(defaultValues);

export const NavBarThemeContextProvider = NavBarThemeContext.Provider;

export const useNavBarThemeContext = () => useContext(NavBarThemeContext);

export default {
  NavBarThemeContextProvider,
  useNavBarThemeContext,
};
