import React from 'react';
import PropTypes from 'prop-types';
import Heading from '~/components/Heading';
import Paragraph from '~/components/Paragraph';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction = ({ heading, description }) => (
  <header className={styles.base}>
    <Heading
      className={styles.heading}
      level={4}
      size="large"
      useSerifFont={true}
    >
      {heading}
    </Heading>
    <Paragraph className={styles.description}>{description}</Paragraph>
  </header>
);

CarouselIntroduction.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

CarouselIntroduction.defaultProps = {
  heading: undefined,
  description: undefined,
};

export default CarouselIntroduction;
