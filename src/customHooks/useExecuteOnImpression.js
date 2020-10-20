import { useEffect, useState } from 'react';
import { useOnScreen } from '~/customHooks';

export const useExecuteOnImpression = (
  ref,
  threshold = 0.2,
  functionToExecute,
) => {
  const [hasTrackedImpression, setHasTrackedImpression] = useState(false);
  const isOnScreen = useOnScreen(ref, threshold);

  useEffect(() => {
    if (isOnScreen && !hasTrackedImpression && functionToExecute) {
      functionToExecute();
      setHasTrackedImpression(true);
    }
  }, [isOnScreen, hasTrackedImpression, functionToExecute]);
};

export default useExecuteOnImpression;
