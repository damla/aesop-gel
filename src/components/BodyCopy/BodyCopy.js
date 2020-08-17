import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import SectionHeading from '~/components/SectionHeading';
import styles from './BodyCopy.module.css';

const BodyCopy = ({
  childrenClassNames,
  className,
  copy,
  eyebrow,
  hasSerifFontHeading,
  heading,
  id,
  subHeading,
  theme,
  content,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

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
        theme={currentTheme}
      />

      {copy && <div className={styles.copy}>{copy}</div>}

      {content && <div className={styles.contentWrapper}>{content}</div>}
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
  content: PropTypes.any,
  copy: PropTypes.node,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
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
  content: undefined,
  copy: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  subHeading: undefined,
  theme: undefined,
};

export default BodyCopy;
