import React from 'react';
import cx from 'classnames';
import marked from 'marked';
import parse from 'html-react-parser';
import Heading from '~/components/elements/Heading/Heading';
import Transition from '~/components/elements/Transition';
import Props from './PDPDetailsHeader.types';
import styles from './PDPDetailsHeader.module.css';

const PDPDetailsHeader: React.FunctionComponent<Props> = ({
  className,
  description,
  productName,
}) => {
  const classSet: string = cx(styles.base, className);

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

export default PDPDetailsHeader;
