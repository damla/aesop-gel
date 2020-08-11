import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LinkButtonGroup from '~/components/LinkButtonGroup';
import SectionHeading from '~/components/SectionHeading';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  childrenClassNames,
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
      <SectionHeading
        childrenClassNames={{
          eyebrow: cx(styles.eyebrow, childrenClassNames.eyebrow),
          heading: cx(styles.heading, childrenClassNames.heading),
          subHeading: cx(styles.subHeading, childrenClassNames.subHeading),
        }}
        eyebrow={eyebrow}
        hasSerifFontHeading={hasSerifFontHeading}
        heading={heading}
        id={id}
        subHeading={subHeading}
        theme={theme}
      />

      {copy && <div className={cx(styles.copy, styles[theme])}>{copy}</div>}

      <LinkButtonGroup link={cta} secondaryLink={secondaryCta} theme={theme} />
    </article>
  );
};

BodyCopy.propTypes = {
  childrenClassNames: PropTypes.shape({
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }),
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
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
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
