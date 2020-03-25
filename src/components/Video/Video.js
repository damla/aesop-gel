import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Image from '~/components/Image';
import Transition from '~/components/Transition';
import styles from './Video.module.css';

export const Video = forwardRef(
  (
    {
      className,
      copy,
      fallbackImage,
      hasAllowAudio,
      hasAutoplay,
      hasLoop,
      hasPlayInFullScreen,
      id,
      large,
      medium,
      poster,
      small,
    },
    ref,
  ) => {
    const pauseVideo = () => {
      videoRef.current.pause();
      setIsPlaying(false);
    };

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

    const [isPlaying, setIsPlaying] = React.useState(hasAutoplay);
    const videoRef = useRef();
    useEscapeKeyListener(stopVideo);

    if (!large && !medium && !small && !fallbackImage) {
      return null;
    }

    const hasVideo = large || medium || small;
    const classSet = cx(styles.base, className);

    const videoClassName = cx(styles.video, {
      [styles.playsInFullScreen]: isPlaying && hasPlayInFullScreen,
    });

    const posterClassName = cx(styles.poster, {
      [styles.isVisible]: !isPlaying,
    });

    return (
      <figure className={classSet} id={id} ref={ref} role="group">
        {hasVideo && (
          <Transition isActive={!poster || (poster && isPlaying)} type="fade">
            <video
              autoPlay={hasAutoplay}
              className={videoClassName}
              controls={false}
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

        <div className={styles.controls}>
          <Transition isActive={isPlaying} type="zoom">
            <Button
              className={styles.close}
              isInline={true}
              onClick={stopVideo}
              title={copy.closeButtonTitle}
            >
              {copy.closeButtonTitle}{' '}
              <Icon className={styles.icon} name="close" />
            </Button>
          </Transition>

          <Button
            className={styles.playPauseButton}
            isInline={true}
            onClick={isPlaying ? pauseVideo : playVideo}
            title={isPlaying ? copy.pauseButtonTitle : copy.playButtonTitle}
          >
            <span
              className={cx(styles.playPauseButtonIcon, {
                [styles.buttonIconOffset]: !isPlaying,
              })}
            >
              <Icon name={isPlaying ? 'pause' : 'play'} />
            </span>
            <span className={styles.playPauseButtonLabel}>
              {isPlaying ? '' : copy.playButtonTitle}
            </span>
          </Button>
        </div>
      </figure>
    );
  },
);

Video.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
    pauseButtonTitle: PropTypes.string,
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
  }).isRequired,
  small: PropTypes.string,
};

Video.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    playButtonTitle: 'View video',
    pauseButtonTitle: 'Pause video',
  },
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
