import React from 'react';
import PropTypes from 'prop-types';
import { Image, Video } from '~/components';
import styles from './BackgroundElement.module.css';

const BackgroundElement = ({ image, mediaType, video }) => {
  if (!mediaType) return null;

  if (mediaType === 'image' && image) {
    return <Image {...image} className={styles.base} />;
  } else if (mediaType === 'video' && video) {
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
  mediaType: PropTypes.oneOf(['image', 'video']),
  video: PropTypes.object,
};

BackgroundElement.defaultProps = {
  image: undefined,
  mediaType: undefined,
  video: undefined,
};

export default BackgroundElement;
