import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './Quote.prop-types';
import styles from './Quote.module.css'; // @TODO Address this

const Quote = ({ author, children, className, noTopPadding = false }) => {
  const classSet = cx(
    styles.base,
    { [styles.noTopPadding]: noTopPadding },
    className,
  );

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <blockquote className={styles.blockquote}>
          <p>{children}</p>
        </blockquote>
        <cite className={styles.author}>{author}</cite>
      </div>
    </div>
  );
};

Quote.propTypes = PROP_TYPES;

export default Quote;
