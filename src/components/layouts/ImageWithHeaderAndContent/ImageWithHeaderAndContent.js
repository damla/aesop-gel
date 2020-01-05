import React from 'react';
import cx from 'classnames';
import Heading from '~/components/elements/Heading';
import Image from '~/components/elements/Image';
import { P } from '~/components/elements/Paragraph';
import Props from './ImageWithHeaderAndContent.types';
import styles from './ImageWithHeaderAndContent.module.css';

const ImageWithHeaderAndContent: React.FunctionComponent<Props> = ({
  className,
  content,
  copy,
  image,
  reverse = false,
}) => {
  const classSet: string = cx(
    styles.base,
    { [styles.reverse]: reverse },
    className,
  );

  return (
    <section className={classSet}>
      <Image
        altText={image.altText}
        className={styles.figure}
        large={image.large}
        medium={image.medium}
        small={image.small}
      />

      <div className={styles.container}>
        <header>
          <Heading level="2" noMargin={true} size="xSmall">
            {copy.title}
          </Heading>
          <Heading level="3" size="xLarge" useSerifFont={true}>
            {copy.subTitle}
          </Heading>
          {copy.description && (
            <P className={styles.description}>{copy.description}</P>
          )}
        </header>
        {content}
      </div>
    </section>
  );
};

export default ImageWithHeaderAndContent;
