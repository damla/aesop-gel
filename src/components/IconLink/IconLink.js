import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';

const IconLink = ({
  altText,
  className,
  height,
  icon,
  iconImageClassName,
  id,
  openInANewWindow,
  target,
  width,
}) => {
  return (
    <Hyperlink
      className={className}
      dataTestRef={`DATA_TEST_REF_ICON_LINK_${id}`}
      hasTargetInNewWindow={openInANewWindow}
      title={altText}
      url={target}
    >
      <Image
        altText={altText}
        className={iconImageClassName}
        large={icon.small}
        medium={icon.small}
        small={icon.small}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </Hyperlink>
  );
};

IconLink.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.object,
  iconImageClassName: PropTypes.string,
  id: PropTypes.string,
  openInANewWindow: PropTypes.bool,
  target: PropTypes.string,
  width: PropTypes.number,
};

IconLink.defaultProps = {
  altText: undefined,
  className: undefined,
  height: 21,
  icon: undefined,
  iconImageClassName: undefined,
  id: undefined,
  openInANewWindow: true,
  target: undefined,
  width: 21,
};

export default IconLink;
