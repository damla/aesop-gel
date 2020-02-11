import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './NextButton.module.css';

/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */
const NextButton = ({ onClick }) => (
  <Button
    className={styles.base}
    handleClick={onClick}
    isInline={true}
    title="next slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

NextButton.propTypes = {
  onClick: PropTypes.func,
};

NextButton.defaultProps = {
  onClick: undefined,
};

export default NextButton;
