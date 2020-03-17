import React from 'react';
import renderer from 'react-test-renderer';
import SubNav from './SubNav';
import SubNavFixture from './SubNav.fixture';

describe('<SubNav />', () => {
  it('should be defined', () => {
    expect(SubNav).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <SubNav heading={SubNavFixture.heading} links={SubNavFixture.links} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without title if not `title` prop is passed', () => {
    const tree = renderer
      .create(<SubNav links={SubNavFixture.links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
