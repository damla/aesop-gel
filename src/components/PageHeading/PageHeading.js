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
        <Heading className={eyebrowClassSet} level="1" size="xSmall">
          {eyebrow}
        </Heading>
      )}
      {heading && (
        <Heading
          className={headingClassSet}
          level={getHeadingLevel(eyebrow)}
          size="large"
        >
          {heading}
        </Heading>
      )}
      {subHeading && (
        <Heading
          className={subHeadingClassSet}
          level={getSubHeadingLevel(eyebrow, heading)}
          size="xSmall"
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
  heading: PropTypes.string,
  id: PropTypes.string,
  subHeading: PropTypes.string,
};

PageHeading.defaultProps = {
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  className: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  subHeading: undefined,
};

export default PageHeading;
