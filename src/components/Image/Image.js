import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { constraintsByViewport } from '~/utils/viewports/viewports';
import Hyperlink from '~/components/Hyperlink';
import styles from './Image.module.css';

const Image = ({ altText, className, cta, large, medium, small, type }) => {
  const fullBleedImage = type === 'componentFullBleedImage';
  const isRightAligned = type === 'componentSquareImage';

  const classSet = cx(
    styles.base,
    { [styles.fullBleedImage]: fullBleedImage },
    { [styles.isRightAligned]: isRightAligned },
    className,
  );

  const picture = (
    <picture className={cx(styles.picture, classSet)}>
      {large && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'large.minWidth',
          )}px)`}
          srcSet={large}
        />
      )}

      {medium && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'medium.minWidth',
          )}px)`}
          srcSet={medium}
        />
      )}

      {small && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'small.minWidth',
          )}px)`}
          srcSet={small}
        />
      )}

      <img alt={altText} />
    </picture>
  );

  return cta ? (
    <Hyperlink openInANewWindow={cta.openInANewWindow} url={cta.url}>
      {picture}
    </Hyperlink>
  ) : (
    picture
  );
};

Image.propTypes = {
  className: PropTypes.string,
  altText: PropTypes.string.isRequired,
  cta: PropTypes.object,
  fullBleedImage: PropTypes.bool,
  id: PropTypes.string,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
};

Image.defaultProps = {
  className: undefined,
  altText: undefined,
  cta: undefined,
  fullBleedImage: undefined,
  id: undefined,
  large: undefined,
  medium: undefined,
  small: undefined,
  type: undefined,
};

export default Image;
