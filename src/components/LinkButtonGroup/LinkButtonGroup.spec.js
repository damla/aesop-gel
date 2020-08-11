import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import LinkButtonGroup from './LinkButtonGroup';
import LinkButtonGroupFixture from './LinkButtonGroup.fixture';

configure({ adapter: new Adapter() });

describe('<LinkButtonGroup />', () => {
  it('should be defined', () => {
    expect(LinkButtonGroup).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<LinkButtonGroup link={LinkButtonGroupFixture.link} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const tree = renderer
      .create(
        <LinkButtonGroup theme="light">
          <a href="/au/r/about">Link</a>
        </LinkButtonGroup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
