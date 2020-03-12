import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TwoColumnLayout from './TwoColumnLayout';
import TwoColumnLayoutFixture from './TwoColumnLayout.fixture';

configure({ adapter: new Adapter() });

describe('<TwoColumnLayout />', () => {
  it('should be defined', () => {
    expect(TwoColumnLayout).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <TwoColumnLayout
          childrenClassNames={TwoColumnLayoutFixture.childrenClassNames}
          className={TwoColumnLayoutFixture.className}
          content={TwoColumnLayoutFixture.content}
          hasRightPadding={TwoColumnLayoutFixture.hasRightPadding}
          hasVerticalPadding={TwoColumnLayoutFixture.hasVerticalPadding}
          id={TwoColumnLayoutFixture.id}
          isReversed={TwoColumnLayoutFixture.isReversed}
          sidebar={TwoColumnLayoutFixture.sidebar}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
