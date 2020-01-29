import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TwoColumn from './TwoColumn';
import TwoColumnFixture from './TowColumn.fixture';

configure({ adapter: new Adapter() });

describe('<TwoColumn />', () => {
  it('should be defined', () => {
    expect(TwoColumn).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <TwoColumn
          addExtraVerticalPadding={TwoColumnFixture.addExtraVerticalPadding}
          id={TwoColumnFixture.id}
          isSidebarRightAligned={TwoColumnFixture.isSidebarRightAligned}
          main={TwoColumnFixture.main}
          sidebar={TwoColumnFixture.sidebar}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
