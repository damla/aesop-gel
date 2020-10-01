import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import IconLink from './IconLink';
import IconLinkFixture from './IconLink.fixture';

configure({ adapter: new Adapter() });

describe('<IconLink />', () => {
  it('should be defined', () => {
    expect(IconLink).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <IconLink
          altText={IconLinkFixture[0].altText}
          hasTargetInNewWindow={true}
          height={25}
          icon={IconLinkFixture[0].icon}
          id={IconLinkFixture[0].altText}
          target={IconLinkFixture[0].target}
          width={25}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
