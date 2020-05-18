import { useCallback, useState } from 'react';
import { defaultValues } from '~/contexts/Theme.context';

const useTheme = ({
  navigationAndLogoTheme: navigationAndLogo,
  loginAndCartTheme: loginAndCart,
}) => {
  const [loginAndCartTheme, updateLoginAndCartTheme] = useState(
    loginAndCart || defaultValues.loginAndCartTheme,
  );
  const [navigationAndLogoTheme, updateNavigationAndLogoTheme] = useState(
    navigationAndLogo || defaultValues.navigationAndLogoTheme,
  );

  const setLoginAndCartTheme = useCallback(newTheme => {
    updateLoginAndCartTheme(newTheme);
  }, []);

  const setNavigationAndLogoTheme = useCallback(newTheme => {
    updateNavigationAndLogoTheme(newTheme);
  }, []);

  return {
    loginAndCartTheme,
    navigationAndLogoTheme,
    setLoginAndCartTheme,
    setNavigationAndLogoTheme,
  };
};

export default useTheme;
