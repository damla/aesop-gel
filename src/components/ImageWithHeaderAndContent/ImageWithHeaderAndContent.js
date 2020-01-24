import React from 'react';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import { P } from '~/components/Paragraph';
import PROP_TYPES from './ImageWithHeaderAndContent.prop-types';
import styles from './ImageWithHeaderAndContent.module.css';

const ImageWithHeaderAndContent = ({
  className,
  content,
  copy,
  image,
  reverse = false,
}) => {
  const classSet = cx(styles.base, { [styles.reverse]: reverse }, className);

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

ImageWithHeaderAndContent.propTypes = PROP_TYPES;

export default ImageWithHeaderAndContent;
