import React from 'react';
import cx from 'classnames';
import marked from 'marked';
import parse from 'html-react-parser';
import Heading from '~/components/elements/Heading/Heading';
import Transition from '~/components/elements/Transition';
import PROP_TYPES from './PDPDetailsHeader.prop-types';
import styles from './PDPDetailsHeader.module.css';

const PDPDetailsHeader = ({ className, description, productName }) => {
  const classSet = cx(styles.base, className);

  return (
    <Transition activeOnMount={true} type="slowFade">
      <header className={classSet}>
        <Heading className={styles.productTitle} level="1" size="xLarge">
          {productName}
        </Heading>
        {description && (
          <div className={styles.productDesc}>{parse(marked(description))}</div>
        )}
      </header>
    </Transition>
  );
};

PDPDetailsHeader.propTypes = PROP_TYPES;

export default PDPDetailsHeader;
