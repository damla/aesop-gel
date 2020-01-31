import React from 'react';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import PROP_TYPES from './NextButton.prop-types';
import styles from './NextButton.module.css';

/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */
const NextButton = ({ onClick }) => (
  <Button
    className={styles.base}
    inline={true}
    onClick={onClick}
    title="next slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

NextButton.propTypes = PROP_TYPES;

export default NextButton;
