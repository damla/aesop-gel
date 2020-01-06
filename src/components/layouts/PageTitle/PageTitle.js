import React from 'react';
import cx from 'classnames';
import Heading from '~/components/elements/Heading';
import { getSubcopyLevel, getTitleLevel } from './PageTitle.utils';
import PROP_TYPES from './PageTitle.prop-types';
import styles from './PageTitle.module.css';

const PageTitle = ({ children, className, eyebrow, id, subcopy }) => {
  const classSet = cx(styles.base, className);

  return (
    <header className={classSet} id={id}>
      {eyebrow && (
        <Heading className={styles.eyebrow} level="1" size="xSmall">
          {eyebrow}
        </Heading>
      )}
      <Heading
        className={styles.title}
        level={getTitleLevel(eyebrow)}
        size="large"
      >
        {children}
      </Heading>
      {subcopy && (
        <Heading
          className={styles.subcopy}
          level={getSubcopyLevel(eyebrow)}
          size="xSmall"
        >
          {subcopy}
        </Heading>
      )}
    </header>
  );
};

PageTitle.propTypes = PROP_TYPES;

export default PageTitle;
