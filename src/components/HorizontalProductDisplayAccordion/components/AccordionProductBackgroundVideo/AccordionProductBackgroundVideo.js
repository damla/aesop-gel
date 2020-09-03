import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './AccordionProductBackgroundVideo.module.css';
import { getViewportForWidth } from '~/utils/viewports';

const AccordionProductBackgroundVideo = ({ small, medium, large }) => {
  const ref = useRef(null);
  useEffect(() => {
    let vp = getViewportForWidth(window.innerWidth);
    const vid = ref.current;
    const bgVideoInit = vid => {
      let videoUrl = large;
      if (vp === 'small') {
        videoUrl = small;
      }
      if (vp === 'medium') {
        videoUrl = medium;
      }
      if (videoUrl) {
        vid.src = videoUrl;
        // objectFitVideos();

        // vid.oncanplay = () => {
        //  const promise = vid.play();
        //  if (promise !== undefined) {
        //    promise
        //      .then(() => {
        //        vid.parentElement.classList.add('autoplay-enabled');
        //        // objectFitVideos();
        //      })
        //      .catch(() => {
        //        vid.parentElement.classList.add('autoplay-disabled');
        //      });
        //  }
        // };
        // vid.addEventListener('loadedmetadata', () => {
        //  const ratio = (vid.videoHeight / vid.videoWidth) * 100;
        //  vid.parentElement.dataset.ratio = ratio;
        // }, false);

        const wrapper = vid.parentElement.parentElement;

        wrapper.addEventListener('mouseover', () => {
          vid.play();
        });

        wrapper.addEventListener('mouseleave', () => {
          vid.pause();
        });
      }
    };

    bgVideoInit(vid);
    window.addEventListener('resize', () => {
      const vpNew = getViewportForWidth(window.innerWidth);
      if (vpNew !== vp) {
        vp = vpNew;
        bgVideoInit(vid);
      }
    });
  }, [ref]);

  return (
    <video
      autoPlay={false}
      className={cx(styles.accordionProductBackgroundVideo)}
      loop={true}
      muted={true}
      playsInline={true}
      ref={ref}
    />
  );
};

AccordionProductBackgroundVideo.propTypes = {
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
};

AccordionProductBackgroundVideo.propTypes = {
  small: undefined,
  medium: undefined,
  large: undefined,
};

export default AccordionProductBackgroundVideo;
