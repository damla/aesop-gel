import React from 'react';
import cx from 'classnames';
import Props from './Quote.types';
import styles from './Quote.module.css'; // @TODO Address this

const Quote: React.FunctionComponent<Props> = ({
  author,
  children,
  className,
  noTopPadding,
}) => {
  const classSet: string = cx(
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

Quote.defaultProps = {
  noTopPadding: false,
};

export default Quote;
