import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash/throttle';
import moment from 'moment';
import WaveSurfer from 'wavesurfer.js';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Hidden from '~/components/Hidden';
import Icon from '~/components/Icon';
import Loading from '~/components/Loading';
import styles from './Audio.module.css';

const Audio = ({ artistName, className, trackTitle }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const trackRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // green #007544
  // blue #114094

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        backend: 'MediaElement',
        barGap: 2,
        barWidth: 1,
        container: waveformRef.current,
        cursorColor: 'transparent',
        cursorWidth: 1,
        height: 80,
        progressColor: '#c67330',
        responsive: true,
        skipLength: 30,
        waveColor: '#b3ada5',
      });

      wavesurfer.current.load(trackRef.current);

      const updateProgress = throttle(currentProgress => {
        setProgress(currentProgress);
      }, 1000);

      const setCurrentDuration = () => {
        setDuration(wavesurfer.current.getDuration());
      };

      const onReady = () => {
        setIsLoading(false);
        setCurrentDuration();
      };

      wavesurfer.current.on('audioprocess', updateProgress);
      wavesurfer.current.on('waveform-ready', onReady);

      return function cleanup() {
        wavesurfer.current.unAll();
        wavesurfer.current.destroy();
      };
    }
  }, []);

  const url = './assets/audio/Istros_Imagined.mp3';

  const classSet = cx(styles.base, className);

  const handleOnClick = () => {
    setIsPlaying(state => !state);
    wavesurfer.current.playPause();
  };

  const PausePlayButton = () => {
    return (
      <Button
        className={styles.playPauseButton}
        isEnabled={!isLoading}
        isInline={true}
        onClick={handleOnClick}
        title={isLoading ? 'Loading audio file' : !isPlaying ? 'Play' : 'Pause'}
      >
        <Icon
          className={cx(styles.iconPlay, { [styles.hidden]: isPlaying })}
          height={15}
          name="play"
          theme="dark"
          width={15}
        />
        <Icon
          className={cx(styles.iconPause, { [styles.hidden]: !isPlaying })}
          height={15}
          name="pause"
          theme="dark"
          width={15}
        />
      </Button>
    );
  };

  const SeekForwardButton = () => {
    return (
      <Button
        className={styles.seekForward}
        isEnabled={!isLoading}
        isInline={true}
        onClick={() => {
          wavesurfer.current.skipForward();
        }}
        title="Seek"
      >
        <Icon className={styles.icon} height={20} name="seek" width={20} />
      </Button>
    );
  };

  const SeekBackwardButton = () => {
    return (
      <Button
        className={styles.seekBackward}
        isEnabled={!isLoading}
        isInline={true}
        onClick={() => {
          wavesurfer.current.skipBackward();
        }}
        title="Seek"
      >
        <Icon className={styles.icon} height={20} name="seek" width={20} />
      </Button>
    );
  };

  return (
    <div className={classSet}>
      {(artistName || trackTitle) && (
        <header className={styles.header}>
          <Heading
            className={styles.artistName}
            isFlush={true}
            level="3"
            size="xXSmall"
          >
            {artistName}
          </Heading>
          <Heading hasSerifFont={true} isFlush={true} level="4" size="medium">
            {trackTitle}
          </Heading>
        </header>
      )}

      <Loading isLoading={isLoading} />
      <div className={styles.waveform} ref={waveformRef} />
      <audio ref={trackRef} src={url} />

      <footer className={styles.footer}>
        <Hidden isLarge={true} isMedium={true} isXLarge={true}>
          <PausePlayButton />
        </Hidden>
        <time className={styles.time}>
          {moment.utc(progress * 1000).format('mm:ss')} /{' '}
          {moment.utc(duration * 1000).format('mm:ss')}
        </time>
        <Hidden isSmall={true}>
          <div className={styles.controls}>
            <SeekForwardButton />
            <PausePlayButton />
            <SeekBackwardButton />
          </div>
        </Hidden>
        <Button
          className={styles.downloadButton}
          isInline={true}
          onClick={() => {}}
          title="Download"
        >
          Download Music <Icon height={13} name="download" width={13} />
        </Button>
      </footer>
    </div>
  );
};

Audio.propTypes = {
  artistName: PropTypes.string,
  className: PropTypes.string,
  trackTitle: PropTypes.string,
};

Audio.defaultProps = {
  artistName: undefined,
  className: undefined,
  trackTitle: undefined,
};

export default Audio;
