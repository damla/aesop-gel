import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import styles from './Controls.module.css';

const Controls = ({
  className,
  copy,
  hasActiveVideo,
  hasAllowAudio,
  hasPlayInFullScreen,
  isMobileOrTablet,
  isMuted,
  isPlaying,
  onAudioButtonClick,
  onCloseButtonClick,
  onPlayPauseButtonClick,
  progress,
}) => {
  const [
    isFullScreenControlsHeaderActive,
    setIsFullScreenControlsHeaderActive,
  ] = useState(true);

  useEscapeKeyListener(() => {
    setIsFullScreenControlsHeaderActive(true);
    onCloseButtonClick();
  });

  const eventTimeout = useRef(null);
  const windowIsDefined = typeof window !== 'undefined';
  const TIMEOUT = 3000;

  useEffect(() => {
    if (windowIsDefined) {
      window.clearTimeout(eventTimeout.current);
    }

    const startTimeout = () => {
      setIsFullScreenControlsHeaderActive(true);

      if (windowIsDefined) {
        window.clearTimeout(eventTimeout.current);

        eventTimeout.current = window.setTimeout(() => {
          setIsFullScreenControlsHeaderActive(false);
        }, TIMEOUT);
      }
    };

    if (hasActiveVideo && hasPlayInFullScreen) {
      startTimeout();
    }

    const handleMouseMove = debounce(() => {
      if (hasActiveVideo && hasPlayInFullScreen) {
        startTimeout();
      }
    }, 10);

    if (windowIsDefined) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return function cleanup() {
      if (windowIsDefined) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.clearTimeout(eventTimeout.current);
      }
    };
  }, [windowIsDefined, hasActiveVideo, hasPlayInFullScreen]);

  const handleCloseButtonClick = () => {
    setIsFullScreenControlsHeaderActive(true);
    onCloseButtonClick();
  };

  const classSet = cx(styles.base, className);

  const fullScreenControlsClassSet = cx({
    [styles.fullScreenControls]: hasPlayInFullScreen,
    [styles.activeFullScreenControls]: hasActiveVideo && hasPlayInFullScreen,
  });

  const playPauseButtonIconClassSet = cx(styles.playPauseButtonIcon, {
    [styles.buttonIconOffset]: !isPlaying,
  });

  const isPlayPauseButtonActive =
    (!isPlaying && hasPlayInFullScreen) ||
    isMobileOrTablet ||
    !hasPlayInFullScreen;

  const playPauseButtonLabel = isPlaying ? '' : copy.playButtonTitle;

  const playPauseButtonTitle = isPlaying
    ? copy.pauseButtonTitle
    : copy.playButtonTitle;

  const playPauseButtonIconName = isPlaying ? 'pause' : 'play';

  return (
    <div className={classSet}>
      <Transition
        isActive={hasActiveVideo && hasPlayInFullScreen && !isMobileOrTablet}
        type="zoom"
      >
        <div className={fullScreenControlsClassSet}>
          <div
            className={cx(styles.fullScreenControlsHeader, {
              [styles.hidden]: !isFullScreenControlsHeaderActive,
            })}
          >
            {hasAllowAudio && (
              <Button
                className={styles.mute}
                isInline={true}
                onClick={onAudioButtonClick}
                title={isMuted ? copy.unmuteButtonTitle : copy.muteButtonTitle}
              >
                <Icon
                  height={30}
                  name={isMuted ? 'muted' : 'unmuted'}
                  theme="light"
                  width={30}
                />
              </Button>
            )}

            <Button
              className={styles.close}
              isInline={true}
              onClick={handleCloseButtonClick}
              title={copy.closeButtonTitle}
            >
              <Icon height={16} name="close" theme="light" width={16} />
            </Button>

            <Button
              className={styles.fullScreenPlayPauseButton}
              isInline={true}
              onClick={onPlayPauseButtonClick}
              title={playPauseButtonTitle}
            >
              <Icon
                height={26}
                name={playPauseButtonIconName}
                theme="light"
                width={26}
              />
            </Button>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </Transition>

      <Transition isActive={isPlayPauseButtonActive} type="fade">
        <Button
          className={styles.playPauseButton}
          isInline={true}
          onClick={onPlayPauseButtonClick}
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
  );
};

Controls.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    muteButtonTitle: PropTypes.string,
    pauseButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
    unmuteButtonTitle: PropTypes.string,
  }),
  hasActiveVideo: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isMobileOrTablet: PropTypes.bool,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onAudioButtonClick: PropTypes.func,
  onCloseButtonClick: PropTypes.func,
  onPlayPauseButtonClick: PropTypes.func,
  progress: PropTypes.number,
};

Controls.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    muteButtonTitle: 'Mute video',
    pauseButtonTitle: 'View video',
    playButtonTitle: 'Pause video',
    unmuteButtonTitle: 'Unmute video',
  },
  hasActiveVideo: false,
  hasAllowAudio: false,
  hasPlayInFullScreen: false,
  isMobileOrTablet: false,
  isMuted: true,
  isPlaying: false,
  onAudioButtonClick: undefined,
  onCloseButtonClick: undefined,
  onPlayPauseButtonClick: undefined,
  progress: 0,
};

export default Controls;
