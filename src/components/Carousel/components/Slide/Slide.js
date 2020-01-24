import React from 'react';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import PROP_TYPES from './Slide.prop-types';
import styles from './Slide.module.css';

const Slide = ({ heading, description, image }) => (
  <>
    {(heading || description) && (
      <div>
        {heading && (
          <Heading className={styles.title} level="5" size="xSmall">
            {heading}
          </Heading>
        )}
        {description && <div>{description}</div>}
      </div>
    )}
    <div className={styles.imageContainer}>
      <Image className={styles.image} {...image} />
    </div>
  </>
);

Slide.propTypes = PROP_TYPES;

export default Slide;
