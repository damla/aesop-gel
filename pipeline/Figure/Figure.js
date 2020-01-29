import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import marked from 'marked';
import PROP_TYPES from './Figure.prop-types';
import styles from './Figure.module.css';

const Figure = ({ caption, children, className, id }) => {
  const classSet = cx(styles.base, className);

  return (
    <figure className={classSet} id={id}>
      {children}
      {caption && (
        <figcaption className={styles.captionWrapper}>
          <div className={styles.caption}>{parse(marked(caption))}</div>
        </figcaption>
      )}
    </figure>
  );
};

Figure.propTypes = PROP_TYPES;

export default Figure;
