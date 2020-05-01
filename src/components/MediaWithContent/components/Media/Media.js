import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import styles from './Media.module.css';

const Media = ({
  className,
  foregroundImage,
  hasFullWidthImage,
  isHero,
  media,
}) => {
  const classSet = cx(
    className,
    styles.base,
    { [styles.hero]: isHero },
    { [styles.hasFullWidthImage]: hasFullWidthImage },
  );

  return (
    <div className={classSet}>
      <Figure className={styles.media}>{media}</Figure>
      {foregroundImage && (
        <Figure className={styles.foregroundImage}>{foregroundImage}</Figure>
      )}
    </div>
  );
};

Media.propTypes = {
  className: PropTypes.string,
  foregroundImage: PropTypes.element,
  hasFullWidthImage: PropTypes.bool,
  isHero: PropTypes.bool,
  media: PropTypes.element.isRequired,
};

Media.defaultProps = {
  className: undefined,
  foregroundImage: undefined,
  hasFullWidthImage: false,
  isHero: false,
  media: undefined,
};

export default Media;
