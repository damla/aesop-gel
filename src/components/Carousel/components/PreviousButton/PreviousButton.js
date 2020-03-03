import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './PreviousButton.module.css';

/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */
const PreviousButton = ({ onClick }) => (
  <Button
    className={styles.base}
    isInline={true}
    onClick={onClick}
    title="next slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

PreviousButton.propTypes = {
  onClick: PropTypes.func,
};

PreviousButton.defaultProps = {
  onClick: undefined,
};

export default PreviousButton;
