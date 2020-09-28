import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '~/components/Hidden';
import Hyperlink from '~/components/Hyperlink';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import cx from 'classnames';
import styles from './FooterBlock.module.css';

const {
  EXTERNAL_TEXT_LINK,
  INTERNAL_NO_ICON_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

const FooterBlock = ({
  className,
  copy,
  heading,
  headingClassName,
  isVisibleOnTabletAndMobile,
  links,
  listClassName,
  listItemClassName,
  theme,
}) => {
  const baseClassSet = cx(styles.base, styles[theme], className);
  const dividerClassSet = cx(styles.divider, styles[theme]);
  const headingClassSet = cx(styles.heading, headingClassName);
  const listClassSet = cx(styles.list, listClassName);
  const listItemClassSet = cx(styles.listItem, listItemClassName);

  return (
    <Hidden
      isMedium={!isVisibleOnTabletAndMobile}
      isSmall={!isVisibleOnTabletAndMobile}
    >
      <section className={baseClassSet}>
        <h5 className={headingClassSet}>{heading}</h5>
        <div className={dividerClassSet} />
        <ul className={listClassSet}>
          {links &&
            links.map(link => (
              <li key={link.id}>
                <Hyperlink
                  className={listItemClassSet}
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
              </li>
            ))}
        </ul>
        {copy && <div className={listItemClassSet}>{copy}</div>}
      </section>
    </Hidden>
  );
};

FooterBlock.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.string,
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  isVisibleOnTabletAndMobile: PropTypes.bool,
  links: PropTypes.array,
  listClassName: PropTypes.string,
  listItemClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FooterBlock.defaultProps = {
  className: undefined,
  copy: undefined,
  heading: undefined,
  headingClassName: undefined,
  isVisibleOnTabletAndMobile: true,
  links: undefined,
  listClassName: undefined,
  listItemClassName: undefined,
  theme: 'dark',
};

export default FooterBlock;
