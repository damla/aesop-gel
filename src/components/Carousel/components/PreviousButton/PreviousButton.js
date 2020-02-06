import React from 'react';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import PROP_TYPES from './PreviousButton.prop-types';
import styles from './PreviousButton.module.css';

/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */
const PreviousButton = ({ onClick }) => (
  <Button
    className={styles.base}
    handleClick={onClick}
    isInline={true}
    title="next slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

PreviousButton.propTypes = PROP_TYPES;

export default PreviousButton;
