import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Video from './Video';

configure({ adapter: new Adapter() });

describe('<Video />', () => {
  it('should be defined', () => {
    expect(Video).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Video
          autoplay={true}
          id="video"
          large="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
          loop={true}
          medium="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
          small="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a fallback image correctly', () => {
    const tree = renderer
      .create(
        <Video
          autoplay={true}
          fallbackImage={{
            altText: 'Fallback Image',
            small:
              '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x',
          }}
          id="video"
          loop={true}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return `null` if no video sizes or fallback image are passed props', () => {
    const component = shallow(<Video autoplay={true} id="video" loop={true} />);
    expect(component.type()).toEqual(null);
  });
});
