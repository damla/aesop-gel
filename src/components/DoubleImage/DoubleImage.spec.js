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
          caption1={<p>{DoubleImageFixture.caption}</p>}
          caption2={<p>{DoubleImageFixture.caption}</p>}
          imageVideo1={{
            altText: DoubleImageFixture.imageOne.altText,
            caption: DoubleImageFixture.imageOne.caption,
            large: DoubleImageFixture.imageOne.large,
            medium: DoubleImageFixture.imageOne.medium,
            small: DoubleImageFixture.imageOne.small,
          }}
          imageVideo2={{
            altText: DoubleImageFixture.imageTwo.altText,
            caption: DoubleImageFixture.imageTwo.caption,
            large: DoubleImageFixture.imageTwo.large,
            medium: DoubleImageFixture.imageTwo.medium,
            small: DoubleImageFixture.imageTwo.small,
          }}
          title1={DoubleImageFixture.title}
          title2={DoubleImageFixture.title}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
