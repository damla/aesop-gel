import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LinkButtonGroup from '~/components/LinkButtonGroup';
import Hyperlink from '~/components/Hyperlink';
import SectionHeading from '~/components/SectionHeading';
import SubNav from '~/components/SubNav';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  childrenClassNames,
  className,
  copy,
  cta,
  ctaTextAlign,
  eyebrow,
  hasSerifFontHeading,
  heading,
  id,
  links,
  renderCtaAsSubnav,
  secondaryCta,
  subHeading,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const LinkBlock = () => {
    return renderCtaAsSubnav ? (
      <SubNav
        links={[cta && { ...cta }, secondaryCta && { ...secondaryCta }].filter(
          Boolean
        )}
        theme={theme}
      />
    ) : (
      <LinkButtonGroup
        className={styles.ctaWrapper}
        textAlign={ctaTextAlign}
        theme={theme}
      >
        {cta && <Hyperlink {...cta}>{cta.text}</Hyperlink>}
        {secondaryCta && (
          <Hyperlink {...secondaryCta}>{secondaryCta.text}</Hyperlink>
        )}
      </LinkButtonGroup>
    );
  };

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

      {copy && <div className={styles.copy}>{copy}</div>}

      {links ? <SubNav links={links} theme={theme} /> : <LinkBlock />}
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
  ctaTextAlign: PropTypes.string,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  renderCtaAsSubnav: PropTypes.bool,
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
  ctaTextAlign: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  links: undefined,
  renderCtaAsSubnav: false,
  secondaryCta: undefined,
  subHeading: undefined,
  theme: 'dark',
};

export default BodyCopy;
