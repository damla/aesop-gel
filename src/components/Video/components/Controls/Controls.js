import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import styles from './Controls.module.css';

const Controls = ({
  className,
  copy,
  onPlayPauseButtonClick,
  onCloseButtonClick,
  hasPlayInFullScreen,
  hasActiveVideo,
  isPlaying,
  isMobileOrTablet,
  progress,
  videoTitle,
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
            {videoTitle && (
              <Heading
                className={styles.videoTitle}
                isFlush={true}
                level="3"
                size="xSmall"
                theme="light"
              >
                {videoTitle}
              </Heading>
            )}

            <Button
              className={styles.close}
              isInline={true}
              onClick={handleCloseButtonClick}
              title={copy.closeButtonTitle}
            >
              {copy.closeButtonTitle}
              <Icon className={styles.icon} name="close" theme="light" />
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
    pauseButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
  }),
  hasActiveVideo: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isMobileOrTablet: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  onPlayPauseButtonClick: PropTypes.func,
  progress: PropTypes.number,
  videoTitle: PropTypes.string,
};

Controls.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    pauseButtonTitle: 'View video',
    playButtonTitle: 'Pause video',
  },
  hasActiveVideo: false,
  hasPlayInFullScreen: false,
  isMobileOrTablet: false,
  isPlaying: false,
  onCloseButtonClick: undefined,
  onPlayPauseButtonClick: undefined,
  progress: 0,
  videoTitle: undefined,
};

export default Controls;
