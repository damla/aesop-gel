import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TermsBox.css';

const TermsBox = ({ className, name, term }) => {
  const baseClassSet = cx(styles.base, className);
  const termBoxClassSet = cx(styles.term);
  return (
    <label htmlFor={name}>
      <div className={baseClassSet}>
        <textarea className={termBoxClassSet} disabled={true} value={term} />
      </div>
    </label>
  );
};

TermsBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  term: PropTypes.string,
};

TermsBox.defaultProps = {
  className: undefined,
  name: undefined,
  term: undefined,
};

export default TermsBox;
