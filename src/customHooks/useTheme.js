import { useState } from 'react';
import { defaultValues } from '~/contexts/Theme.context';

const useTheme = ({
  navigationAndLogoTheme: navigationAndLogo,
  loginAndCartTheme: loginAndCart,
}) => {
  const [loginAndCartTheme, setLoginAndCartTheme] = useState(
    loginAndCart || defaultValues.loginAndCartTheme,
  );
  const [navigationAndLogoTheme, setNavigationAndLogoTheme] = useState(
    navigationAndLogo || defaultValues.navigationAndLogoTheme,
  );

  return {
    loginAndCartTheme,
    navigationAndLogoTheme,
    setLoginAndCartTheme,
    setNavigationAndLogoTheme,
  };
};

export default useTheme;
