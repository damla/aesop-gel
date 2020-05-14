import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Quote.module.css';

const Quote = ({ author, className, content, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <blockquote className={styles.blockquote}>{content}</blockquote>
        <cite className={styles.author}>{author}</cite>
      </div>
    </div>
  );
};

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Quote.defaultProps = {
  author: undefined,
  className: undefined,
  content: undefined,
  theme: 'dark',
};

export default Quote;
