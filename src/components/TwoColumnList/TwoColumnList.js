import React from 'react';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import List from '~/components/List';
import PROP_TYPES from './TwoColumnList.prop-types';
import styles from './TwoColumnList.module.css';

export const Column = ({ lists }) =>
  lists.map(({ primaryTitle, subTitle, subItemLinks, id }) => {
    const linkItems = subItemLinks.map(
      ({ id, style, text, url, openInANewWindow, type }) => ({
        content: (
          <Hyperlink
            openInANewWindow={openInANewWindow}
            style={style}
            text={text}
            type={type}
            url={url}
          />
        ),
        id,
      }),
    );

    return (
      <div className={styles.wrapper} key={id}>
        {primaryTitle && <Heading level="2">{primaryTitle}</Heading>}
        {subTitle && (
          <Heading level="4" size="small">
            {subTitle}
          </Heading>
        )}
        {subItemLinks && <List items={linkItems} />}
      </div>
    );
  });

const TwoColumnList = ({ leftColumn, rightColumn, className }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <div className={styles.column}>
        <Column lists={leftColumn} />
      </div>
      <div className={styles.column}>
        <Column lists={rightColumn} />
      </div>
    </div>
  );
};

TwoColumnList.propTypes = PROP_TYPES;

export default TwoColumnList;
