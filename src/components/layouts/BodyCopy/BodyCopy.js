import React from 'react';
import cx from 'classnames';
import marked from 'marked';
import parse from 'html-react-parser';
import Heading from '~/components/elements/Heading/Heading';
import Hyperlink from '~/components/elements/Hyperlink';
import PROP_TYPES from './BodyCopy.prop-types';
import { getPrimaryTitleLevel, getSecondaryTitleLevel } from './BodyCopy.utils';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  className,
  copy,
  cta,
  eyebrow,
  id,
  parent = '',
  primaryTitle,
  quote,
  secondaryTitle,
}) => {
  const classSet = cx(styles.base, className, styles[parent]);

  return (
    <section className={classSet} id={id}>
      {eyebrow && (
        <Heading className={styles.eyebrow} level="2" size="xSmall">
          {eyebrow}
        </Heading>
      )}

      {primaryTitle && (
        <Heading
          className={styles.primaryTitle}
          level={getPrimaryTitleLevel(eyebrow)}
          size="xLarge"
        >
          {primaryTitle}
        </Heading>
      )}

      {secondaryTitle && (
        <Heading
          className={styles.secondaryTitle}
          level={getSecondaryTitleLevel(eyebrow, primaryTitle)}
          size="small"
        >
          {secondaryTitle}
        </Heading>
      )}

      {copy && (
        <div className={styles.copy}>{parse(marked(copy.toString()))}</div>
      )}

      {cta && cta.text && (
        <Hyperlink
          openInANewWindow={cta.openInANewWindow}
          style={cta.style}
          url={cta.url}
        >
          {cta.text}
        </Hyperlink>
      )}

      {quote && <p className={styles.quote}>{quote}</p>}
    </section>
  );
};

BodyCopy.propTypes = PROP_TYPES;

export default BodyCopy;
