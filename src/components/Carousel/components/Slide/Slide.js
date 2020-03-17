import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import styles from './Slide.module.css';

const Slide = ({ heading, description, image, theme }) => (
  <>
    {(heading || description) && (
      <div className={cx(styles.information, styles[theme])}>
        {heading && (
          <Heading
            className={styles.heading}
            level="5"
            size="xSmall"
            theme={theme}
          >
            {heading}
          </Heading>
        )}
        {description && <div className={styles.description}>{description}</div>}
      </div>
    )}
    <div className={styles.imageContainer}>
      <Image className={styles.image} theme={theme} {...image} />
    </div>
  </>
);

Slide.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Slide.defaultProps = {
  heading: undefined,
  description: undefined,
  image: undefined,
  theme: 'dark',
};

export default Slide;
