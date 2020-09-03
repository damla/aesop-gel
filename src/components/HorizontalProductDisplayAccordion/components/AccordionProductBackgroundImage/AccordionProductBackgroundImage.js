import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getViewportForWidth } from '~/utils/viewports';
import styles from './AccordionProductBackgroundImage.module.css';

// const AccordionProductBackgroundImage = forwardRef(function ImageRef({
const AccordionProductBackgroundImage = ({ small, medium, large }) => {
  // const classSet = cx(
  //  { [styles.base]: !cta },
  //  styles.picture,
  //  { [styles.fullBleedImage]: fullBleedImage },
  //  { [styles.isRightAligned]: isRightAligned },
  //  styles[theme],
  //  className,
  // );

  const BgImgWrap = useRef();

  useEffect(() => {
    let vp = getViewportForWidth(window.innerWidth);
    const BgImgInit = BgImgWrap => {
      const imgDiv = BgImgWrap.current;
      if (imgDiv.querySelector(`[data-screensize=${vp}]`)) {
        const src = imgDiv.querySelector(`[data-screensize=${vp}]`).dataset
          .imgsrc;

        if (src) {
          imgDiv.querySelector('[data-imgdiv]').style.backgroundImage =
            'url(' + src + ')';
        }
      }
    };
    BgImgInit(BgImgWrap);
    window.addEventListener('resize', () => {
      const vpNew = getViewportForWidth(window.innerWidth);
      if (vpNew !== vp) {
        vp = vpNew;
        BgImgInit(BgImgWrap);
      }
    });
  }, [BgImgWrap]);

  return (
    <div className={cx(styles.prodAccBgimg)} ref={BgImgWrap}>
      {large && (
        <div
          aria-hidden="true"
          data-imgsrc={large}
          data-screensize="large"
          key="large"
        />
      )}

      {medium && (
        <div
          aria-hidden="true"
          data-imgsrc={large}
          data-screensize="medium"
          key="medium"
        />
      )}

      {small && (
        <div
          aria-hidden="true"
          data-imgsrc={large}
          data-screensize="small"
          key="small"
        />
      )}
      <div className={cx(styles.imgdiv)} data-imgdiv={true} />
    </div>
  );
};

AccordionProductBackgroundImage.propTypes = {
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};

AccordionProductBackgroundImage.defaultProps = {
  large: undefined,
  medium: undefined,
  small: undefined,
};

export default AccordionProductBackgroundImage;
