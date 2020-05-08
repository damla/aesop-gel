import { useCallback, useState } from 'react';

const useAddToCart = () => {
  const [isLoading, updateIsLoading] = useState(false);
  const [isUpdateSuccessful, updateIsUpdateSuccessful] = useState(false);

  const setIsLoading = useCallback(currentIsLoading => {
    updateIsLoading(currentIsLoading);
  }, []);

  const setIsUpdateSuccessful = useCallback(currentIsLoading => {
    updateIsUpdateSuccessful(currentIsLoading);
  }, []);

  const handleOnClick = () => {
    setIsLoading(true);

    /** @TODO handle passing in success and error callbacks */
    window.setTimeout(function mockNetworkRequest() {
      setIsLoading(false);
      setIsUpdateSuccessful(true);
    }, 2000);
  };

  return {
    handleOnClick,
    isLoading,
    isUpdateSuccessful,
  };
};

export default useAddToCart;
