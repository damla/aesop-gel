import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import Image from '~/components/Image';
import styles from './DoubleImage.module.css';

const DoubleImage = ({ className, imageOne, imageTwo, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <section className={classSet}>
      <Figure
        caption={imageOne.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        <Image
          altText={imageOne.altText}
          large={imageOne.large}
          medium={imageOne.medium}
          small={imageOne.small}
        />
      </Figure>
      <Figure
        caption={imageTwo.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        <Image
          altText={imageTwo.altText}
          large={imageTwo.large}
          medium={imageTwo.medium}
          small={imageTwo.small}
        />
      </Figure>
    </section>
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
  theme: PropTypes.oneOf(['dark', 'light']),
};

DoubleImage.defaultProps = {
  className: undefined,
  imageOne: undefined,
  imageTwo: undefined,
  theme: 'dark',
};

export default DoubleImage;
