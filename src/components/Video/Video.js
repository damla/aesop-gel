import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { ascertainIsMobileOrTablet } from '~/utils/viewports';
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
      hasAllowAudio,
      hasAutoplay,
      hasLoop,
      hasPlayInFullScreen,
      id,
      isFullWidth,
      large,
      medium,
      poster,
      small,
    },
    ref,
  ) => {
    const [isPlaying, setIsPlaying] = React.useState(hasAutoplay);

    const videoRef = useRef();

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

    useEscapeKeyListener(stopVideo);

    const hasVideo = large || medium || small;

    const hanldeOnPosterClick = () => playVideo();

    const handlePlayPauseButtonOnClick = isPlaying ? pauseVideo : playVideo;

    const isMobileOrTablet = ascertainIsMobileOrTablet();

    const classSet = cx(styles.base, className, {
      [styles.fullWidth]: isFullWidth,
    });

    const videoClassSet = cx(styles.video, {
      [styles.playsInFullScreen]: isPlaying && hasPlayInFullScreen,
    });

    const posterClassSet = cx(styles.poster, {
      [styles.isVisible]: !isPlaying,
    });

    const controlsClassSet = cx(styles.controls, {
      [styles.playsInFullScreen]: isPlaying && hasPlayInFullScreen,
    });

    const playPauseButtonIconClassSet = cx(styles.playPauseButtonIcon, {
      [styles.buttonIconOffset]: !isPlaying,
    });

    const isPlayPauseButtonActive =
      (!isPlaying && hasPlayInFullScreen) ||
      isMobileOrTablet ||
      !hasPlayInFullScreen;

    const isCloseButtonActive =
      isPlaying && hasPlayInFullScreen && !isMobileOrTablet;

    const playPauseButtonLabel = isPlaying ? '' : copy.playButtonTitle;

    const playPauseButtonTitle = isPlaying
      ? copy.pauseButtonTitle
      : copy.playButtonTitle;

    const playPauseButtonIconName = isPlaying ? 'pause' : 'play';

    return (
      <figure className={classSet} id={id} ref={ref} role="group">
        {hasVideo && (
          <Transition isActive={!poster || (poster && isPlaying)} type="fade">
            <video
              autoPlay={hasAutoplay}
              className={videoClassSet}
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
              className={posterClassSet}
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

        <div className={controlsClassSet}>
          <Transition isActive={isCloseButtonActive} type="zoom">
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

          <Transition isActive={isPlayPauseButtonActive} type="zoom">
            <Button
              className={styles.playPauseButton}
              isInline={true}
              onClick={handlePlayPauseButtonOnClick}
              title={playPauseButtonTitle}
            >
              <span className={playPauseButtonIconClassSet}>
                <Icon name={playPauseButtonIconName} />
              </span>
              <span className={styles.playPauseButtonLabel}>
                {playPauseButtonLabel}
              </span>
            </Button>
          </Transition>
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
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isFullWidth: PropTypes.bool,
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
    closeButtonTitle: 'Close',
    playButtonTitle: 'View video',
    pauseButtonTitle: 'Pause video',
  },
  hasAllowAudio: false,
  hasAutoplay: false,
  hasLoop: true,
  hasPlayInFullScreen: false,
  id: undefined,
  isFullWidth: true,
  large: undefined,
  medium: undefined,
  poster: undefined,
  small: undefined,
};

export default Video;
