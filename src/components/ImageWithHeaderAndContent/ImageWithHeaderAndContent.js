import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import { P } from '~/components/Paragraph';
import Transition from '~/components/Transition';
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
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-200px');
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReverse },
    styles[`theme-${theme}`],
    className,
  );

  return (
    <Transition isActive={onScreen} type="slowFade">
      <section className={classSet} div={true} ref={ref}>
        <Image
          altText={image.altText}
          className={cx(styles.figure, {
            [styles.isFullWidthImage]: hasFullWidthImage,
          })}
          large={image.large}
          medium={image.medium}
          small={image.small}
          theme={theme}
        />

        <div
          className={cx(styles.container, {
            [styles.hasFullWidthImage]: hasFullWidthImage,
          })}
        >
          <div className={styles.wrapper}>
            <header>
              <Heading
                className={styles.heading}
                level="2"
                noMargin={true}
                size="xSmall"
                theme={theme}
              >
                {copy.heading}
              </Heading>
              <Heading
                hasSerifFont={true}
                level="3"
                size="xLarge"
                theme={theme}
              >
                {copy.subHeading}
              </Heading>
              {copy.description}
            </header>

            {content}
          </div>
        </div>
      </section>
    </Transition>
  );
};

ImageWithHeaderAndContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
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
  theme: 'dark',
};

export default ImageWithHeaderAndContent;
