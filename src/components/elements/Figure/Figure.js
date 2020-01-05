import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import marked from 'marked';
import Props from '~/types/Figure.types';
import styles from './Figure.module.css';

const Figure: React.FunctionComponent<Props> = ({
  caption,
  children,
  classSet,
  id,
}) => {
  const className: string = cx(styles.base, classSet);

  return (
    <figure className={className} id={id}>
      {children}
      {caption && (
        <figcaption className={styles.captionWrapper}>
          <div className={styles.caption}>{parse(marked(caption))}</div>
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
