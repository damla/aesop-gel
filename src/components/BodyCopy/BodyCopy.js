import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import marked from 'marked';
import parse from 'html-react-parser';
import Heading from '~/components/Heading/Heading';
import Hyperlink from '~/components/Hyperlink';
import { getPrimaryTitleLevel, getSecondaryTitleLevel } from './BodyCopy.utils';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  className,
  copy,
  cta,
  eyebrow,
  id,
  parent,
  primaryTitle,
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
        <div className={styles.ctaWrapper}>
          <Hyperlink
            openInANewWindow={cta.openInANewWindow}
            style={cta.style}
            url={cta.url}
          >
            {cta.text}
          </Hyperlink>
        </div>
      )}
    </section>
  );
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  cta: PropTypes.object,
  eyebrow: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.oneOf(['TextOverHero', 'HalfWidthFullBleed']),
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
};

BodyCopy.defaultProps = {
  className: undefined,
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  id: undefined,
  parent: undefined,
  primaryTitle: undefined,
  secondaryTitle: undefined,
};

export default BodyCopy;
