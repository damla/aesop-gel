import React from 'react';
import renderer from 'react-test-renderer';
import TwoColumnList from './TwoColumnList';
import TwoColumnListFixture from './TwoColumnList.fixture';

describe('<TwoColumnList />', () => {
  it('should be defined', () => {
    expect(TwoColumnList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <TwoColumnList
          leftColumn={TwoColumnListFixture.leftColumn}
          rightColumn={TwoColumnListFixture.rightColumn}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
