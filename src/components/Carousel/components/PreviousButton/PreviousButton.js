import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './PreviousButton.module.css';

/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */
const PreviousButton = ({ onClick, theme }) => (
  <Button
    className={styles.base}
    isInline={true}
    onClick={onClick}
    theme={theme}
    title="next slide"
  >
    <Icon height={18} name="chevron" theme={theme} width={18} />
  </Button>
);

PreviousButton.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

PreviousButton.defaultProps = {
  onClick: undefined,
  theme: 'dark',
};

export default PreviousButton;
