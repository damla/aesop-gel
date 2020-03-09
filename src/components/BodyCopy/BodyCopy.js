import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import marked from 'marked';
import parse from 'html-react-parser';
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
  heading,
  subHeading,
}) => {
  const classSet = cx(styles.base, className, styles[parent]);

  return (
    <section className={classSet} id={id}>
      <PageHeading
        childrenClassNames={{
          eyebrow: styles.eyebrow,
          heading: styles.heading,
          subHeading: styles.subHeading,
        }}
        eyebrow={eyebrow}
        heading={heading}
        id={id}
        subHeading={subHeading}
      />

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
  heading: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.oneOf(['TextOverHero', 'HalfWidthFullBleed']),
  subHeading: PropTypes.string,
};

BodyCopy.defaultProps = {
  className: undefined,
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  parent: undefined,
  subHeading: undefined,
};

export default BodyCopy;
