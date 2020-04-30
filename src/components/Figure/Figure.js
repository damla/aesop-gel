import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Figure.module.css';

const Figure = ({
  caption,
  children,
  className,
  hasCaptionBorder,
  id,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    styles[theme],
    {
      [styles.border]: hasCaptionBorder && caption,
    },
    className,
  );

  const captionWrapperClassSet = cx(styles.captionWrapper);

  return (
    <figure className={classSet} id={id}>
      {children}
      {caption && (
        <figcaption className={captionWrapperClassSet}>
          <div className={styles.caption}>{caption}</div>
        </figcaption>
      )}
    </figure>
  );
};

Figure.propTypes = {
  caption: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  hasCaptionBorder: PropTypes.bool,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Figure.defaultProps = {
  caption: undefined,
  children: undefined,
  className: undefined,
  hasCaptionBorder: true,
  id: undefined,
  theme: 'dark',
};

export default Figure;
