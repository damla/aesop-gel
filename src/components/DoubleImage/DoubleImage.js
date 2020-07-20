import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import styles from './DoubleImage.module.css';

const DoubleImage = ({ className, imageOne, imageTwo, theme, link1, link2, }) => {
  const classSet = cx(styles.base, styles[theme], className);

  const Image1 = () => (
    <Image
      altText={imageOne.altText}
      large={imageOne.large}
      medium={imageOne.medium}
      small={imageOne.small}
    />
  );

  const Image2 = () => (
    <Image
      altText={imageTwo.altText}
      large={imageTwo.large}
      medium={imageTwo.medium}
      small={imageTwo.small}
    />
  );

  return (
    <div className={classSet}>
      <Figure
        caption={imageOne.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link1 ? (
          <Hyperlink {...link1}>
            <Image1 />
          </Hyperlink>
        ) : (
          <Image1 />
        )}
      </Figure>
      <Figure
        caption={imageTwo.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link2 ? (
          <Hyperlink {...link2}>
            <Image2 />
          </Hyperlink>
        ) : (
          <Image2 />
        )}
      </Figure>
    </div>
  );
};

DoubleImage.propTypes = {
  className: PropTypes.string,
  imageOne: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  imageTwo: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  link1: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    hasTargetInNewWindow: PropTypes.bool,
    type: PropTypes.string,
  }),
  link2: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    hasTargetInNewWindow: PropTypes.bool,
    type: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

DoubleImage.defaultProps = {
  className: undefined,
  imageOne: undefined,
  imageTwo: undefined,
  theme: 'dark',
  link1: undefined,
  link2: undefined,
};

export default DoubleImage;
