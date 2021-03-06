import { useState } from 'react';
import { defaultValues } from '~/contexts/NavBarTheme.context';

const useNavBarTheme = ({
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

export default useNavBarTheme;
