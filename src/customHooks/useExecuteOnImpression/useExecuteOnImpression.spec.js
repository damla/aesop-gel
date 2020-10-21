import React, { useRef } from 'react';
import { useExecuteOnImpression } from './useExecuteOnImpression';
import * as hooks from '~/customHooks';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { object } from '@storybook/addon-knobs';

configure({ adapter: new Adapter() });

jest.mock('~/customHooks');

describe('useExecuteOnImpression', () => {
  const functionToCall = jest.fn();
  const useOnScreenSpy = jest.spyOn(hooks, 'useOnScreen');

  // eslint-disable-next-line react/prop-types
  const TestRig = ({ options }) => {
    const ref = useRef(null);
    useExecuteOnImpression(ref, functionToCall, options);

    return <div ref={ref}>Hello word</div>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call useOnScreen using the passed in options', () => {
    const options = {
      threshold: 0.32,
      shouldExecuteOnReEntry: false,
    };

    mount(<TestRig options={options} />);

    expect(useOnScreenSpy).toHaveBeenCalledWith(
      expect.any(Object),
      options.threshold,
      undefined,
      options.shouldExecuteOnReEntry,
    );
  });

  it('should call useOnScreen with the default values if options are not provided', () => {
    mount(<TestRig />);

    expect(useOnScreenSpy).toHaveBeenCalledWith(
      expect.any(Object),
      0.2,
      undefined,
      true,
    );
  });

  it('should not call the function if the element is not on screen', () => {
    useOnScreenSpy.mockReturnValue(false);

    mount(<TestRig />);

    expect(functionToCall).not.toHaveBeenCalled();
  });

  it('should call the function  when the element is in view', () => {
    useOnScreenSpy.mockReturnValue(true);

    mount(<TestRig />);

    expect(functionToCall).toHaveBeenCalledTimes(1);
  });
});
