import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import { P } from '~/components/Paragraph';
import styles from './ImageWithHeaderAndContent.module.css';

const ImageWithHeaderAndContent = ({
  className,
  content,
  copy,
  hasFullWidthImage,
  image,
  isReverse,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReverse },
    styles[`theme-${theme}`],
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

ImageWithHeaderAndContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOf([PropTypes.element, PropTypes.node]),
  copy: PropTypes.exact({
    description: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  image: PropTypes.object.isRequired,
  isReverse: PropTypes.bool,
  theme: PropTypes.string,
};

ImageWithHeaderAndContent.defaultProps = {
  className: undefined,
  content: undefined,
  copy: undefined,
  hasFullWidthImage: false,
  image: undefined,
  isReverse: false,
  theme: '1',
};

export default ImageWithHeaderAndContent;
