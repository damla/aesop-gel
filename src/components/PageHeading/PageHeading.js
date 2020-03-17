import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import { getHeadingLevel, getSubHeadingLevel } from './PageHeading.utils';
import styles from './PageHeading.module.css';

const PageHeading = ({
  childrenClassNames,
  className,
  eyebrow,
  id,
  subHeading,
  heading,
  hasSerifFontHeading,
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
          level="1"
          size="xSmall"
          theme={theme}
        >
          {eyebrow}
        </Heading>
      )}
      {heading && (
        <Heading
          className={headingClassSet}
          hasSerifFont={hasSerifFontHeading}
          level={getHeadingLevel(eyebrow)}
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
          level={getSubHeadingLevel(eyebrow, heading)}
          size="xSmall"
          theme={theme}
        >
          {subHeading}
        </Heading>
      )}
    </header>
  );
};

PageHeading.propTypes = {
  childrenClassNames: PropTypes.shape({
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }),
  className: PropTypes.string,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf('dark', 'light'),
};

PageHeading.defaultProps = {
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  className: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  subHeading: undefined,
  theme: 'dark',
};

export default PageHeading;
