import React from 'react';
import { configure } from 'enzyme';
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
          hasAutoplay={true}
          hasLoop={true}
          id="video"
          large="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
          medium="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
          poster={{
            copy: {
              altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
            },
          }}
          small="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
