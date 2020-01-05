import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Image from '~/components/elements/Image';
import styles from './Video.module.css';

const PROP_TYPE_OPTIONS = {
  HYPERLINK_TARGET_TYPE: PropTypes.oneOf(['Relative', 'Absolute']),
  HYPERLINK_STYLE_TYPE: PropTypes.oneOf([
    'External Button Link',
    'External Text Link',
    'Internal Button Link',
    'Internal Text Link',
    'External No Icon Link',
    'No Icon Link',
  ]),
};

const HYPERLINK = PropTypes.exact({
  id: PropTypes.string,
  dataTestRef: PropTypes.string,
  openInANewWindow: PROP_TYPE_OPTIONS.HYPERLINK_STYLE_TYPE,
  style: PropTypes.CtaStylesType,
  title: PropTypes.string,
  text: PropTypes.string,
  type: PROP_TYPE_OPTIONS.HYPERLINK_TARGET_TYPE,
  url: PropTypes.string.isRequired,
});

const IMAGE = PropTypes.exact({
  className: PropTypes.string,
  altText: PropTypes.string.isRequired,
  cta: HYPERLINK,
  fullBleedImage: PropTypes.boolean,
  id: PropTypes.boolean,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
});

export const PROP_TYPE_SHAPES = {
  HYPERLINK,
  IMAGE,
};

const propTypes = {
  autoplay: PropTypes.boolean.isReuired,
  classSet: PropTypes.string,
  fallbackImage: PROP_TYPE_SHAPES.IMAGE,
  id: PropTypes.string.isRquired,
  large: PropTypes.string,
  loop: PropTypes.boolean.isRequired,
  medium: PropTypes.string,
  poster: PROP_TYPE_SHAPES.IMAGE,
  small: PropTypes.string,
  playInFullScreen: PropTypes.boolean,
};

export const Video = ({
  autoplay,
  classSet = '',
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
  const className = cx(styles.base, classSet);
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
    <figure className={className} id={id} role="group">
      {poster && hasVideo && (
        <Button
          classSet={posterClassName}
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

Video.propTypes = propTypes;

export default Video;
