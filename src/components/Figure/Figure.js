import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Figure.module.css';

const Figure = ({ caption, children, className, id, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <figure className={classSet} id={id}>
      {children}
      {caption && (
        <figcaption className={styles.captionWrapper}>
          <div className={styles.caption}>{caption}</div>
        </figcaption>
      )}
    </figure>
  );
};

Figure.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Figure.defaultProps = {
  caption: undefined,
  children: undefined,
  className: undefined,
  id: undefined,
  theme: 'dark',
};

export default Figure;
