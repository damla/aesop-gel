import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Paragraph from '~/components/Paragraph';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction = ({ heading, description, theme }) => {
  const classSet = cx(styles.base, styles[theme]);

  return (
    <header className={classSet}>
      <Heading
        className={styles.heading}
        hasSerifFont={true}
        level="4"
        size="xLarge"
        theme={theme}
      >
        {heading}
      </Heading>
      <Paragraph className={styles.description} theme={theme}>
        {description}
      </Paragraph>
    </header>
  );
};

CarouselIntroduction.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

CarouselIntroduction.defaultProps = {
  description: undefined,
  heading: undefined,
  theme: 'dark',
};

export default CarouselIntroduction;
