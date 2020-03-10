import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import List from '~/components/List';
import styles from './TwoColumnList.module.css';

export const Column = ({ lists }) =>
  lists.map(({ heading, id, items, subHeading }) => {
    const linkItems = items.map(
      ({ id, style, text, url, openInANewWindow, type }) => {
        if (!url) {
          return {
            content: text,
            id,
          };
        }

        return {
          content: (
            <Hyperlink
              openInANewWindow={openInANewWindow}
              style={style}
              type={type}
              url={url}
            >
              {text}
            </Hyperlink>
          ),
          id,
        };
      },
    );

    return (
      <div className={styles.wrapper} key={id}>
        {heading && (
          <Heading level="2" size="medium">
            {heading}
          </Heading>
        )}
        {subHeading && (
          <Heading className={styles.subHeading} level="4" size="xSmall">
            {subHeading}
          </Heading>
        )}
        {linkItems && <List className={styles.list} items={linkItems} />}
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

TwoColumnList.propTypes = {
  className: PropTypes.string,
  leftColumn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  rightColumn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
};

export default TwoColumnList;
