import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './NextButton.module.css';

/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */
const NextButton = ({ onClick, theme }) => (
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

NextButton.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

NextButton.defaultProps = {
  onClick: undefined,
  theme: 'dark',
};

export default NextButton;
