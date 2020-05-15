import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import List from '~/components/List';
import styles from './TwoColumnList.module.css';

export const Column = ({ lists, theme }) =>
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
              theme={theme}
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
          <Heading level="2" size="medium" theme={theme}>
            {heading}
          </Heading>
        )}
        {subHeading && (
          <Heading
            className={styles.subHeading}
            level="3"
            size="small"
            theme={theme}
          >
            {subHeading}
          </Heading>
        )}
        {linkItems && (
          <List className={styles.list} items={linkItems} theme={theme} />
        )}
      </div>
    );
  });

const TwoColumnList = ({ className, leftColumn, rightColumn, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <div className={classSet}>
      <div className={styles.column}>
        <Column lists={leftColumn} theme={theme} />
      </div>
      <div className={styles.column}>
        <Column lists={rightColumn} theme={theme} />
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
      items: PropTypes.array,
    }),
  ).isRequired,
  rightColumn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      items: PropTypes.array,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

TwoColumnList.defaultProps = {
  className: undefined,
  leftColumn: undefined,
  rightColumn: undefined,
  theme: 'dark',
};

export default TwoColumnList;
