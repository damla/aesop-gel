import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './FullscreenVideo.module.css';
import { getViewportForWidth } from '~/utils/viewports';

const FullscreenVideo = ({ large, medium, small }) => {
  const ref = useRef(null);

  useEffect(() => {
    let viewportSize = getViewportForWidth(window.innerWidth);

    const bgVideoInit = ref => {
      const vid = ref.current;
      let videoUrl = large;
      if (viewportSize === 'small') {
        videoUrl = small;
      }
      if (viewportSize === 'medium') {
        videoUrl = medium;
      }

      vid.src = videoUrl;
      // objectFitVideos();

      vid.oncanplay = () => {
        const promise = vid.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              vid.parentElement.classList.add('autoplay-enabled');
              // objectFitVideos();
            })
            .catch(() => {
              vid.parentElement.classList.add('autoplay-disabled');
            });
        }
      };

      const getRatio = () => () => {
        const ratio = (vid.videoHeight / vid.videoWidth) * 100;
        vid.parentElement.dataset.ratio = ratio;
      };

      vid.addEventListener('loadedmetadata', getRatio, false);

      return () => {
        window.removeEventListener('loadedmetadata', getRatio);
      };
    };
    bgVideoInit(ref);

    const setVideoSrc = () => {
      const viewportSizeNew = getViewportForWidth(window.innerWidth);
      if (viewportSizeNew !== viewportSize) {
        viewportSize = viewportSizeNew;
        bgVideoInit(ref);
      }
    };
    window.addEventListener('resize', setVideoSrc);
  }, [ref]);

  return (
    <video
      autoPlay={true}
      className={cx(styles.fullscreenVideo)}
      loop={true}
      muted={true}
      playsInline={true}
      ref={ref}
    />
  );
};

FullscreenVideo.propTypes = {
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};

FullscreenVideo.defaultProps = {
  large: undefined,
  medium: undefined,
  small: undefined,
};

export default FullscreenVideo;
