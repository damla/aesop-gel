import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Image from '~/components/elements/Image';
import PROP_TYPES from './Video.prop-types';
import styles from './Video.module.css';

export const Video = ({
  autoplay,
  className = '',
  fallbackImage,
  id,
  large,
  loop,
  medium,
  playInFullScreen = false,
  poster,
  small,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (!large && !medium && !small && !fallbackImage) {
    return null;
  }

  const hanldeOnPosterClick = () => setIsPlaying(true);
  const hasVideo = large || medium || small;
  const classSet = cx(styles.base, className);
  const videoClassName = cx(
    styles.video,
    {
      [styles.fullScreen]: playInFullScreen,
    },
    {
      [styles.isVisible]: !poster || (poster && isPlaying),
    },
  );

  const posterClassName = cx(styles.poster, {
    [styles.isVisible]: !isPlaying,
  });

  return (
    <figure className={classSet} id={id} role="group">
      {poster && hasVideo && (
        <Button
          className={posterClassName}
          inline={true}
          onClick={hanldeOnPosterClick}
          title="play video"
        >
          <Image
            altText={poster.altText}
            large={poster.large}
            medium={poster.medium}
            small={poster.small}
          />
        </Button>
      )}
      {hasVideo && (
        <video
          autoPlay={autoplay || isPlaying}
          className={videoClassName}
          controls={true}
          loop={loop}
          muted={true}
          playsInline={true}
        >
          {large && (
            <source media="(min-width: 1025px)" src={large} type="video/mp4" />
          )}
          {medium && (
            <source media="(min-width: 640px)" src={medium} type="video/mp4" />
          )}

          {small && (
            <source media="(min-width: 0px)" src={small} type="video/mp4" />
          )}
        </video>
      )}

      {typeof fallbackImage !== 'undefined' && !hasVideo && (
        <Image
          altText={fallbackImage.altText}
          large={fallbackImage.large}
          medium={fallbackImage.medium}
          small={fallbackImage.small}
        />
      )}
    </figure>
  );
};

Video.propTypes = PROP_TYPES;

export default Video;
