import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Hyperlink from '~/components/Hyperlink';
import styles from './LinkButtonGroup.module.css';

const LinkButtonGroup = ({
  className,
  link,
  hasFitContent,
  secondaryLink,
  textAlign,
  theme,
}) => {
  if (!link && !secondaryLink) {
    return null;
  }
  const classSet = cx(
    styles.base,
    { [styles.fitContent]: hasFitContent },
    className,
  );

  return (
    <div className={classSet}>
      {link.text && (
        <Hyperlink
          className={cx(styles.link, styles[textAlign])}
          openInANewWindow={link.openInANewWindow}
          style={link.style}
          textAlign={textAlign}
          theme={theme}
          url={link.url}
        >
          {link.text}
        </Hyperlink>
      )}

      {secondaryLink && secondaryLink.text && (
        <Hyperlink
          className={cx(styles.link, styles[textAlign])}
          openInANewWindow={secondaryLink.openInANewWindow}
          style={secondaryLink.style}
          textAlign={textAlign}
          theme={theme}
          url={secondaryLink.url}
        >
          {secondaryLink.text}
        </Hyperlink>
      )}
    </div>
  );
};

LinkButtonGroup.propTypes = {
  className: PropTypes.string,
  hasFitContent: PropTypes.bool,
  link: PropTypes.object,
  secondaryLink: PropTypes.object,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

LinkButtonGroup.defaultProps = {
  className: undefined,
  hasFitContent: false,
  link: undefined,
  secondaryLink: undefined,
  textAlign: 'center',
  theme: 'dark',
};

export default LinkButtonGroup;
