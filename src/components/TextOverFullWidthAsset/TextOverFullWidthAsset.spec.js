import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextOverFullWidthAsset from './TextOverFullWidthAsset';
import Image from '~/components/Image';
import Video from '~/components/Video';

configure({ adapter: new Adapter() });

jest.mock('../Image', () => ({
  __esModule: true,
  default: jest.fn(() => <p>this is an image</p>),
}));

jest.mock('../Video', () => ({
  __esModule: true,
  default: jest.fn(() => <p>this is an video</p>),
}));

describe('<TextOverFullWidthAsset />', () => {
  const MockContent = <p>Nice try, guy</p>;
  const backgroundImage = {
    alt: 'strange picture of a sumo warrior',
  };
  const backgroundVideo = {
    small: 'smol video',
  };

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(); // suppress warnings re incorrect type
    jest.clearAllMocks();
  });

  it('should not render anything if content and mediaType are not valid', () => {
    const wrapper = mount(
      <TextOverFullWidthAsset
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
      />,
    );

    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render an Image with the correct values if the mediaType is Image', () => {
    const expectedProps = {
      ...backgroundImage,
      className: 'media',
    };

    mount(
      <TextOverFullWidthAsset
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        content={MockContent}
        mediaType="Image"
      />,
    );

    expect(Video).not.toHaveBeenCalled();
    expect(Image.mock.calls[0][0]).toEqual(expectedProps);
  });

  it('should render an Video with the correct values if the mediaType is Video', () => {
    const expectedProps = {
      ...backgroundVideo,
      className: 'media',
      hasControls: false,
      hasAllowAudio: false,
      hasAutoplay: true,
      hasLoop: true,
      hasSpanContent: false,
      hasPlayInFullScreen: false,
      isHeroFullWidth: false,
      isFullWidth: true,
      isScrollBasedVideo: false,
    };

    mount(
      <TextOverFullWidthAsset
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        content={MockContent}
        mediaType="Video"
      />,
    );

    expect(Image).not.toHaveBeenCalled();
    expect(Video.mock.calls[0][0]).toEqual(expectedProps);
  });

  it('should not render media if the mediaType is not Image or Video', () => {
    mount(<TextOverFullWidthAsset content={MockContent} mediaType="Song" />);

    expect(Image).not.toHaveBeenCalled();
    expect(Video).not.toHaveBeenCalled();
  });
});
