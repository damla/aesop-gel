import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PageHeading from '~/components/PageHeading';
import Hyperlink from '~/components/Hyperlink';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  className,
  copy,
  cta,
  eyebrow,
  id,
  parent,
  hasSerifFontHeading,
  heading,
  secondaryCta,
  subHeading,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme], styles[parent], className);

  return (
    <article className={classSet} id={id}>
      <PageHeading
        childrenClassNames={{
          eyebrow: styles.eyebrow,
          heading: styles.heading,
          subHeading: styles.subHeading,
        }}
        eyebrow={eyebrow}
        hasSerifFontHeading={hasSerifFontHeading}
        heading={heading}
        id={id}
        subHeading={subHeading}
        theme={theme}
      />

      {copy && <div className={cx(styles.copy, styles[theme])}>{copy}</div>}

      {((cta && cta.text) || (secondaryCta && secondaryCta.text)) && (
        <div className={styles.ctaWrapper}>
          {cta && (
            <Hyperlink
              openInANewWindow={cta.openInANewWindow}
              style={cta.style}
              theme={theme}
              url={cta.url}
            >
              {cta.text}
            </Hyperlink>
          )}

          {secondaryCta && (
            <Hyperlink
              className={styles.secondaryCta}
              openInANewWindow={secondaryCta.openInANewWindow}
              style={secondaryCta.style}
              theme={theme}
              url={secondaryCta.url}
            >
              {secondaryCta.text}
            </Hyperlink>
          )}
        </div>
      )}
    </article>
  );
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.node,
  cta: PropTypes.object,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.oneOf(['HeroWithContent', 'HalfWidthFullBleed']),
  secondaryCta: PropTypes.object,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

BodyCopy.defaultProps = {
  className: undefined,
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  parent: undefined,
  secondaryCta: undefined,
  subHeading: undefined,
  theme: 'dark',
};

export default BodyCopy;
