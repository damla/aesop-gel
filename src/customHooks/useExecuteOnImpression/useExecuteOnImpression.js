import { useEffect } from 'react';
import { useOnScreen } from '~/customHooks';

/**
 * A hook to execute a callback when the element enters the fold
 * @param {HTMLElement} ref a DOM reference to the element
 * @param {Function} functionToExecute a callback function to execute
 * @param {{threshold: Number, shouldExecuteOnReEntry: Boolean}} options hook behaviour options
 *
 *
 * @example
 * const ref = React.useRef(null);
 * const myFunction = () => console.log('Execute order 66');
 * const options = {threshold: 0.5, shouldExecuteOnReEntry: true};
 *
 * useExecuteOnImpression(ref, myFunction, options)
 */
export const useExecuteOnImpression = (
  ref,
  functionToExecute,
  options = {},
) => {
  const { threshold = 0.2, shouldExecuteOnReEntry = true } = options;
  const isOnScreen = useOnScreen(
    ref,
    threshold,
    undefined,
    shouldExecuteOnReEntry,
  );

  useEffect(() => {
    if (isOnScreen) {
      functionToExecute();
    }
  }, [functionToExecute, isOnScreen]);
};

export default useExecuteOnImpression;
