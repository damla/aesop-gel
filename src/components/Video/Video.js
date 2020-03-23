import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Image from '~/components/Image';
import Transition from '~/components/Transition';
import styles from './Video.module.css';

export const Video = ({
  className,
  copy,
  fallbackImage,
  forwardedRef,
  hasAllowAudio,
  hasAutoplay,
  hasLoop,
  hasPlayInFullScreen,
  id,
  large,
  medium,
  poster,
  small,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(hasAutoplay);
  const videoRef = useRef();

  if (!large && !medium && !small && !fallbackImage) {
    return null;
  }

  const stopVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);

    setTimeout(() => {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }, 500);
  };

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const hanldeOnPosterClick = () => playVideo();

  const hasVideo = large || medium || small;
  const classSet = cx(styles.base, className);
  const videoClassName = cx(styles.video, {
    [styles.fullScreen]: hasPlayInFullScreen,
  });

  const posterClassName = cx(styles.poster, {
    [styles.isVisible]: !isPlaying,
  });

  return (
    <figure className={classSet} id={id} ref={forwardedRef} role="group">
      {hasVideo && (
        <Transition isActive={!poster || (poster && isPlaying)} type="fade">
          <video
            autoPlay={hasAutoplay}
            className={videoClassName}
            controls={true}
            controlsList="nodownload"
            loop={hasLoop}
            muted={!hasAllowAudio}
            playsInline={!hasPlayInFullScreen}
            ref={videoRef}
          >
            {large && (
              <source
                media="(min-width: 1025px)"
                src={large}
                type="video/mp4"
              />
            )}
            {medium && (
              <source
                media="(min-width: 640px)"
                src={medium}
                type="video/mp4"
              />
            )}

            {small && (
              <source media="(min-width: 0px)" src={small} type="video/mp4" />
            )}
          </video>
        </Transition>
      )}

      {poster && hasVideo && (
        <Transition isActive={!isPlaying} type="fade">
          <Button
            className={posterClassName}
            isInline={true}
            onClick={hanldeOnPosterClick}
            title={copy.playButtonTitle}
          >
            <Image
              altText={poster.altText}
              large={poster.large}
              medium={poster.medium}
              small={poster.small}
            />
          </Button>
        </Transition>
      )}

      {typeof fallbackImage !== 'undefined' && !hasVideo && (
        <Image
          altText={fallbackImage.altText}
          large={fallbackImage.large}
          medium={fallbackImage.medium}
          small={fallbackImage.small}
        />
      )}

      <Transition isActive={isPlaying} type="zoom">
        <Button
          className={styles.close}
          isInline={true}
          onClick={stopVideo}
          title={copy.closeButtonTitle}
        >
          Close <Icon className={styles.icon} name="close" />
        </Button>
      </Transition>
    </figure>
  );
};

Video.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
  }),
  fallbackImage: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    className: PropTypes.string,
    hasFullBleedImage: PropTypes.bool,
    id: PropTypes.bool,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool.isRequired,
  hasLoop: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  id: PropTypes.string.isRequired,
  large: PropTypes.string,
  medium: PropTypes.string,
  poster: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    className: PropTypes.string,
    hasFullBleedImage: PropTypes.bool,
    id: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  small: PropTypes.string,
};

Video.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close Video',
    playButtonTitle: 'Play Video',
  },
  fallbackImage: undefined,
  forwardedRef: undefined,
  hasAllowAudio: false,
  hasAutoplay: undefined,
  hasLoop: false,
  hasPlayInFullScreen: false,
  id: undefined,
  large: undefined,
  medium: undefined,
  poster: undefined,
  small: undefined,
};

export default Video;
