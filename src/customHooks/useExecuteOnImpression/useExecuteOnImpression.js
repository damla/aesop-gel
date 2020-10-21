import { useEffect, useState } from 'react';
import { useOnScreen } from '~/customHooks';

export const useExecuteOnImpression = (
  ref,
  threshold = 0.2,
  functionToExecute,
) => {
  const [hasExecutedFunction, setHasExecutedFunction] = useState(false);
  const isOnScreen = useOnScreen(ref, threshold);

  useEffect(() => {
    if (isOnScreen && !hasExecutedFunction && functionToExecute) {
      functionToExecute();
      setHasExecutedFunction(true);
    }
  }, [isOnScreen, hasExecutedFunction, functionToExecute]);
};

export default useExecuteOnImpression;
