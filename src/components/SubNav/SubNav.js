import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink/Hyperlink';
import List from '~/components/List';
import styles from './SubNav.module.css';

export const getLinkItems = (links, theme) =>
  links.map(({ id, style, children, url }) => ({
    content: (
      <Hyperlink
        className={styles.itemList}
        style={style}
        theme={theme}
        url={url}
      >
        {children}
      </Hyperlink>
    ),
    id,
  }));

const SubNav = ({ className, heading, headingClassName, links, theme }) => {
  const classSet = cx(styles.base, className);

  return (
    <nav className={classSet}>
      {heading && (
        <Heading
          className={cx(styles.heading, headingClassName)}
          level="3"
          noMargin={true}
          size="small"
          theme={theme}
        >
          {heading}
        </Heading>
      )}
      <List items={getLinkItems(links, theme)} theme={theme} />
    </nav>
  );
};

SubNav.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object)
    .isRequired /** @TODO hyperlink type */,
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

SubNav.defaultProps = {
  className: undefined,
  links: undefined,
  heading: undefined,
  headingClassName: undefined,
  theme: 'dark',
};

export default SubNav;
