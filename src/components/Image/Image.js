import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { constraintsByViewport } from '~/utils/viewports';
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
    <Hyperlink hasTargetInNewWindow={cta.openInANewWindow} url={cta.url}>
      {picture}
    </Hyperlink>
  ) : (
    picture
  );
};

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  cta: PropTypes.object,
  id: PropTypes.string,
  isFullBleedImage: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
};

Image.defaultProps = {
  altText: undefined,
  className: undefined,
  cta: undefined,
  id: undefined,
  isFullBleedImage: undefined,
  large: undefined,
  medium: undefined,
  small: undefined,
  type: undefined,
};

export default Image;
