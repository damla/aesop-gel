import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import styles from './DoubleImage.module.css';

const DoubleImage = ({
  caption1,
  caption2,
  className,
  imageOne,
  imageTwo,
  link1,
  link2,
  theme,
  title1,
  title2,
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const Image1 = () => (
    <Image
      altText={imageOne.altText}
      large={imageOne.large}
      medium={imageOne.medium}
      small={imageOne.small}
    />
  );

  const Image2 = () => (
    <Image
      altText={imageTwo.altText}
      large={imageTwo.large}
      medium={imageTwo.medium}
      small={imageTwo.small}
    />
  );

  return (
    <div className={classSet}>
      <Figure
        caption={!title1 && !caption1 && imageOne.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link1 ? (
          <Hyperlink {...link1}>
            <Image1 />
          </Hyperlink>
        ) : (
          <Image1 />
        )}
        {(title1 || caption1) && (
          <figcaption className={styles.figcaption}>
            {title1 && (
              <Heading level="3" size="xSmall" theme={theme}>
                {link1 ? (
                  <Hyperlink {...link1} theme={theme}>
                    {title1}
                  </Hyperlink>
                ) : (
                  title1
                )}
              </Heading>
            )}
            {caption1 && (
              <div
                className={styles.caption}
                dangerouslySetInnerHTML={{ __html: caption1 }}
              />
            )}
          </figcaption>
        )}
      </Figure>
      <Figure
        caption={!title2 && !caption2 && imageTwo.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link2 ? (
          <Hyperlink {...link2}>
            <Image2 />
          </Hyperlink>
        ) : (
          <Image2 />
        )}
        {(title2 || caption2) && (
          <figcaption className={styles.figcaption}>
            {title2 && (
              <Heading level="3" size="xSmall" theme={theme}>
                {link2 ? (
                  <Hyperlink {...link2} theme={theme}>
                    {title2}
                  </Hyperlink>
                ) : (
                  title2
                )}
              </Heading>
            )}
            {caption2 && (
              <div
                className={styles.caption}
                dangerouslySetInnerHTML={{ __html: caption2 }}
              />
            )}
          </figcaption>
        )}
      </Figure>
    </div>
  );
};

const linkType = PropTypes.shape({
  text: PropTypes.string,
  url: PropTypes.string,
  hasTargetInNewWindow: PropTypes.bool,
  type: PropTypes.string,
});

DoubleImage.propTypes = {
  className: PropTypes.string,
  imageOne: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  imageTwo: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  link1: linkType,
  link2: linkType,
  theme: PropTypes.oneOf(['dark', 'light']),
  title1: PropTypes.string,
  title2: PropTypes.string,
  caption1: PropTypes.string,
  caption2: PropTypes.string,
};

DoubleImage.defaultProps = {
  className: undefined,
  imageOne: undefined,
  imageTwo: undefined,
  theme: 'dark',
  link1: undefined,
  link2: undefined,
  title1: undefined,
  title2: undefined,
  caption1: undefined,
  caption2: undefined,
};

export default DoubleImage;
