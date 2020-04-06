import React, { forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Transition from '~/components/Transition';
import styles from './VideoPlayer.module.css';

const VideoPlayer = forwardRef(
  (
    {
      className,
      hasActiveVideo,
      hasAllowAudio,
      hasAutoplay,
      hasLoop,
      hasPlayInFullScreen,
      isActive,
      isMuted,
      large,
      medium,
      small,
    },
    ref,
  ) => {
    const classSet = cx(
      styles.base,
      {
        [styles.playsInFullScreen]: hasPlayInFullScreen,
        [styles.isPlayingInFullScreen]: hasActiveVideo && hasPlayInFullScreen,
      },
      className,
    );

    return (
      <Transition isActive={isActive} type="fade">
        <video
          autoPlay={hasAutoplay}
          className={classSet}
          controls={false}
          loop={hasLoop}
          muted={!hasAllowAudio || (hasAllowAudio && isMuted)}
          playsInline={!hasPlayInFullScreen}
          ref={ref}
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
      </Transition>
    );
  },
);

VideoPlayer.propTypes = {
  className: PropTypes.string,
  hasActiveVideo: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isActive: PropTypes.bool,
  isMuted: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};

VideoPlayer.defaultProps = {
  className: undefined,
  hasActiveVideo: false,
  hasAllowAudio: false,
  hasAutoplay: false,
  hasLoop: true,
  hasPlayInFullScreen: false,
  isActive: true,
  isMuted: true,
  large: undefined,
  medium: undefined,
  small: undefined,
};

export default VideoPlayer;
