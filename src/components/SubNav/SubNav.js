import React from 'react';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink/Hyperlink';
import List from '~/components/List';
import { PROP_TYPES } from './SubNav.prop-types';
import styles from './SubNav.module.css';

export const getLinkItems = links =>
  links.map(({ id, style, text, url }) => ({
    content: (
      <Hyperlink
        className={styles.itemList}
        style={style}
        text={text}
        url={url}
      />
    ),
    id,
  }));

const SubNav = ({ className, titleClassName, links, title }) => {
  const classSet = cx(styles.base, className);
  const headingSize = '5';
  const headingLevel = 'small';

  return (
    <nav className={classSet}>
      {title && (
        <Heading
          className={cx(styles.title, titleClassName)}
          level={headingLevel}
          noMargin={true}
          size={headingSize}
        >
          {title}
        </Heading>
      )}
      <List items={getLinkItems(links)} />
    </nav>
  );
};

SubNav.propTypes = PROP_TYPES;

export default SubNav;
