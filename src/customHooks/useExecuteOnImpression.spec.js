import React, { useRef } from 'react';
import { useExecuteOnImpression } from './useExecuteOnImpression';
import * as hooks from '~/customHooks';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('~/customHooks');

describe('useExecuteOnImpression', () => {
  const functionToCall = jest.fn();
  const useOnScreenSpy = jest.spyOn(hooks, 'useOnScreen');

  // eslint-disable-next-line react/prop-types
  const TestRig = ({ functionToCall, threshold }) => {
    const ref = useRef(null);
    useExecuteOnImpression(ref, threshold, functionToCall);

    return <div ref={ref}>Hello word</div>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call useOnScreen with the specified threshold', () => {
    const threshold = 0.32;

    mount(<TestRig functionToCall={functionToCall} threshold={threshold} />);

    expect(useOnScreenSpy.mock.calls[0][1]).toBe(threshold);
  });

  it('should call useOnScreen with the default threshold if one is not provided', () => {
    mount(<TestRig functionToCall={functionToCall} />);

    expect(useOnScreenSpy.mock.calls[0][1]).toBe(0.2);
  });

  it('should not call the function if the element is not on screen', () => {
    useOnScreenSpy.mockReturnValue(false);

    mount(<TestRig functionToCall={functionToCall} threshold={0.5} />);

    expect(functionToCall).not.toHaveBeenCalled();
  });

  it('should not call the function if it is not passed in', () => {
    // this scenario is not possible but added for coverage
    useOnScreenSpy.mockReturnValue(true);

    mount(<TestRig functionToCall={undefined} threshold={0.5} />);

    expect(functionToCall).not.toHaveBeenCalled();
  });

  it('should call the function only once when the element is in view', () => {
    useOnScreenSpy.mockReturnValue(true);

    const wrapper = mount(<TestRig functionToCall={functionToCall} />);
    wrapper.setProps({ functionToCall, threshold: 0.5 }); // changing props to re-render

    expect(functionToCall).toHaveBeenCalledTimes(1);
  });
});
