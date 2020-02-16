import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import parse from 'html-react-parser';
import marked from 'marked';
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

Figure.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Figure;
