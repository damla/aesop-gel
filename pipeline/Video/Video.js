import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '~/components/Button';
import Image from '~/components/Image';
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

Video.propTypes = {
  autoplay: PropTypes.bool.isRequired,
  className: PropTypes.string,
  fallbackImage: PropTypes.shape({
    className: PropTypes.string,
    altText: PropTypes.string.isRequired,
    cta: PropTypes.shape({
      id: PropTypes.string,
      dataTestRef: PropTypes.string,
      openInANewWindow: PropTypes.bool,
      style: PropTypes.oneOf(['Relative', 'Absolute']),
      title: PropTypes.string,
      text: PropTypes.string,
      type: PropTypes.oneOf([
        'External Button Link',
        'External Text Link',
        'Internal Button Link',
        'Internal Text Link',
        'External No Icon Link',
        'No Icon Link',
      ]),
      url: PropTypes.string.isRequired,
    }),
    fullBleedImage: PropTypes.bool,
    id: PropTypes.bool,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    type: PropTypes.string,
  }),
  id: PropTypes.string.isRequired,
  large: PropTypes.string,
  loop: PropTypes.bool.isRequired,
  medium: PropTypes.string,
  poster: PropTypes.shape({
    className: PropTypes.string,
    altText: PropTypes.string.isRequired,
    cta: PropTypes.exact({
      id: PropTypes.string,
      dataTestRef: PropTypes.string,
      openInANewWindow: PropTypes.bool,
      style: PropTypes.oneOf(['Relative', 'Absolute']),
      title: PropTypes.string,
      text: PropTypes.string,
      type: PropTypes.oneOf([
        'External Button Link',
        'External Text Link',
        'Internal Button Link',
        'Internal Text Link',
        'External No Icon Link',
        'No Icon Link',
      ]),
      url: PropTypes.string.isRequired,
    }),
    fullBleedImage: PropTypes.bool,
    id: PropTypes.bool,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    type: PropTypes.string,
  }),
  small: PropTypes.string,
  playInFullScreen: PropTypes.bool,
};

export default Video;
