import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import { getHeadingLevel, getSubHeadingLevel } from './SectionHeading.utils';
import styles from './SectionHeading.module.css';

const SectionHeading = ({
  childrenClassNames,
  className,
  eyebrow,
  hasHeadingTopMargin,
  hasSerifFontHeading,
  heading,
  id,
  isPageHeading,
  subHeading,
  theme,
}) => {
  const classSet = cx(styles.base, className);
  const eyebrowClassSet = cx(styles.eyebrow, childrenClassNames.eyebrow);
  const headingClassSet = cx(styles.heading, childrenClassNames.heading);
  const subHeadingClassSet = cx(
    styles.subHeading,
    childrenClassNames.subHeading,
  );

  return (
    <header className={classSet} id={id}>
      {eyebrow && (
        <Heading
          className={eyebrowClassSet}
          hasMediumWeightFont={true}
          hasTopMargin={hasHeadingTopMargin}
          level={isPageHeading ? '1' : '2'}
          size="xXSmall"
          theme={theme}
        >
          {eyebrow}
        </Heading>
      )}
      {heading && (
        <Heading
          className={headingClassSet}
          hasSerifFont={hasSerifFontHeading}
          hasTopMargin={hasHeadingTopMargin}
          level={getHeadingLevel(eyebrow, isPageHeading)}
          size="xLarge"
          theme={theme}
        >
          {heading}
        </Heading>
      )}
      {subHeading && (
        <Heading
          className={subHeadingClassSet}
          hasMediumWeightFont={true}
          hasTopMargin={hasHeadingTopMargin}
          level={getSubHeadingLevel(eyebrow, heading, isPageHeading)}
          size="xSmall"
          theme={theme}
        >
          {subHeading}
        </Heading>
      )}
    </header>
  );
};

SectionHeading.propTypes = {
  childrenClassNames: PropTypes.shape({
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }),
  className: PropTypes.string,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  hasHeadingTopMargin: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  isPageHeading: PropTypes.bool,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

SectionHeading.defaultProps = {
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  className: undefined,
  eyebrow: undefined,
  hasHeadingTopMargin: false,
  heading: undefined,
  id: undefined,
  isPageHeading: false,
  subHeading: undefined,
  theme: 'dark',
};

export default SectionHeading;
