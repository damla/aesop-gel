import React from 'react';
import Heading from '~/components/Heading';
import { P } from '~/components/Paragraph';
import PROP_TYPES from './CarouselIntroduction.prop-types';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction = ({ heading, description }) => (
  <header className={styles.base}>
    <Heading
      className={styles.heading}
      level="4"
      size="large"
      useSerifFont={true}
    >
      {heading}
    </Heading>
    <P className={styles.description}>{description}</P>
  </header>
);

CarouselIntroduction.propTypes = PROP_TYPES;

export default CarouselIntroduction;
