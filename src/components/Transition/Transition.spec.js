import React from 'react';
import renderer from 'react-test-renderer';
import Transition from './Transition';

describe('<Transition />', () => {
  it('should be defined', () => {
    expect(Transition).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Transition isActive={true} type="fade">
          <div>Content</div>
        </Transition>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
