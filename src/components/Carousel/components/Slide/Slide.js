import React from 'react';
import PropTypes from 'prop-types';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import styles from './Slide.module.css';

const Slide = ({ heading, description, image }) => (
  <>
    {(heading || description) && (
      <div className={styles.information}>
        {heading && (
          <Heading className={styles.heading} level={5} size="xSmall">
            {heading}
          </Heading>
        )}
        {description && <div className={styles.description}>{description}</div>}
      </div>
    )}
    <div className={styles.imageContainer}>
      <Image className={styles.image} {...image} />
    </div>
  </>
);

Slide.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
};

Slide.defaultProps = {
  heading: undefined,
  description: undefined,
  image: undefined,
};

export default Slide;
