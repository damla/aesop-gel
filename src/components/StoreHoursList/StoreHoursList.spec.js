import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import StoreHoursList from './StoreHoursList';
import StoreHoursListFixture from './StoreHoursList.fixture';

configure({ adapter: new Adapter() });

describe('<StoreHoursList />', () => {
  it('should be defined', () => {
    expect(StoreHoursList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <StoreHoursList
          alternateHoursNote={StoreHoursListFixture.alternateHoursNote}
          heading={StoreHoursListFixture.heading}
          hoursList={StoreHoursListFixture.hoursList}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
