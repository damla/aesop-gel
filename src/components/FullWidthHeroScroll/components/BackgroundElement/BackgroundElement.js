import React from 'react';
import PropTypes from 'prop-types';
import { Image, Video } from '~/components';
import styles from './BackgroundElement.module.css';

const BackgroundElement = ({ image, video, imageOrVideoAsBackground }) => {
  if (!imageOrVideoAsBackground) return null;

  if (imageOrVideoAsBackground === 'image' && image) {
    return <Image {...image} className={styles.base} />;
  } else if (imageOrVideoAsBackground === 'video' && video) {
    return (
      <Video
        {...video}
        className={styles.base}
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        isBackground={true}
        isMuted={true}
      />
    );
  }

  return null;
};

BackgroundElement.propTypes = {
  image: PropTypes.object,
  imageOrVideoAsBackground: PropTypes.oneOf(['image', 'video']),
  video: PropTypes.object,
};

BackgroundElement.defaultProps = {
  image: undefined,
  imageOrVideoAsBackground: undefined,
  video: undefined,
};

export default BackgroundElement;
