import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DoubleImage from './DoubleImage';
import DoubleImageFixture from './DoubleImage.fixture';

configure({ adapter: new Adapter() });

describe('<DoubleImage />', () => {
  it('should be defined', () => {
    expect(DoubleImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <DoubleImage
          mediaOne={{
            heading: DoubleImageFixture.title,
            type: DoubleImageFixture.imageOne.type,
            altText: DoubleImageFixture.imageOne.altText,
            caption: DoubleImageFixture.imageOne.caption,
            large: DoubleImageFixture.imageOne.large,
            medium: DoubleImageFixture.imageOne.medium,
            small: DoubleImageFixture.imageOne.small,
          }}
          mediaTwo={{
            heading: DoubleImageFixture.title,
            link: DoubleImageFixture.link,
            type: DoubleImageFixture.imageTwo.type,
            altText: DoubleImageFixture.imageTwo.altText,
            caption: DoubleImageFixture.imageTwo.caption,
            large: DoubleImageFixture.imageTwo.large,
            medium: DoubleImageFixture.imageTwo.medium,
            small: DoubleImageFixture.imageTwo.small,
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
