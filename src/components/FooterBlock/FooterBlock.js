import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from '~/components/Hyperlink';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import cx from 'classnames';
import styles from './FooterBlock.css';

const {
  EXTERNAL_TEXT_LINK,
  INTERNAL_NO_ICON_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

const FooterBlock = ({
  className,
  copy,
  isVisibleOnTabletAndMobile,
  links,
  theme,
  title,
}) => {
  const baseClassSet = cx(
    styles.base,
    styles[theme],
    links && !isVisibleOnTabletAndMobile && styles.invisible,
    className,
  );
  const titleClassSet = cx(styles.title);
  const dividerClassSet = cx(styles.divider, styles[theme]);
  return (
    <section className={baseClassSet}>
      <div className={titleClassSet}>{title}</div>
      <div className={dividerClassSet} />
      {links &&
        links.map(link => (
          <div key={link.id}>
            <Hyperlink
              className={styles.item}
              dataTestRef={`DATA_TEST_REF_FOOTER_BLOCK_${link.id}`}
              hasTargetInNewWindow={false}
              style={
                link.openInANewWindow
                  ? EXTERNAL_TEXT_LINK
                  : INTERNAL_NO_ICON_TEXT_LINK
              }
              theme={theme}
              title={link.text}
              url={link.url}
            >
              {link.text}
            </Hyperlink>
          </div>
        ))}
      {copy && <div className={styles.item}>{copy}</div>}
    </section>
  );
};

FooterBlock.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.string,
  isVisibleOnTabletAndMobile: PropTypes.bool,
  links: PropTypes.array,
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
};

FooterBlock.defaultProps = {
  className: undefined,
  copy: undefined,
  isVisibleOnTabletAndMobile: false,
  links: undefined,
  theme: 'dark',
  title: undefined,
};

export default FooterBlock;
