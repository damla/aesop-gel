import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import Video from '~/components/Video';
import styles from './DoubleImage.module.css';

const DoubleImage = ({
  caption1,
  caption2,
  className,
  imageVideo1,
  imageVideo2,
  link1,
  link2,
  theme,
  title1,
  title2,
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const ImageVideoBlock1 = () => {
    return imageVideo1.type === 'video' ? (
      <Video
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        hasPlayInFullScreen={false}
        isFullWidth={true}
        large={imageVideo1.large}
        medium={imageVideo1.medium}
        poster={imageVideo1.poster}
        small={imageVideo1.small}
      />
    ) : (
      <Image
        altText={imageVideo1.altText}
        large={imageVideo1.large}
        medium={imageVideo1.medium}
        small={imageVideo1.small}
      />
    );
  };

  const ImageVideoBlock2 = () => {
    return imageVideo2.type === 'video' ? (
      <Video
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        hasPlayInFullScreen={false}
        isFullWidth={true}
        large={imageVideo2.large}
        medium={imageVideo2.medium}
        poster={imageVideo2.poster}
        small={imageVideo2.small}
      />
    ) : (
      <Image
        altText={imageVideo2.altText}
        large={imageVideo2.large}
        medium={imageVideo2.medium}
        small={imageVideo2.small}
      />
    );
  };

  return (
    <div className={classSet}>
      <Figure
        caption={!title1 && !caption1 && imageVideo1.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link1 ? (
          <Hyperlink {...link1} className={styles.imageLinkWrapper}>
            <ImageVideoBlock1 />
          </Hyperlink>
        ) : (
          <ImageVideoBlock1 />
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
        caption={!title2 && !caption2 && imageVideo2.caption}
        className={styles.figure}
        hasCaptionBorder={false}
        theme={theme}
      >
        {link2 ? (
          <Hyperlink {...link2} className={styles.imageLinkWrapper}>
            <ImageVideoBlock2 />
          </Hyperlink>
        ) : (
          <ImageVideoBlock2 />
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
  imageVideo1: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string,
      altText: PropTypes.string,
      caption: PropTypes.string,
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
    }),
    PropTypes.shape({
      type: PropTypes.string,
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
      poster: PropTypes.object,
    }),
  ]),
  imageVideo2: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string,
      altText: PropTypes.string,
      caption: PropTypes.string,
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
    }),
    PropTypes.shape({
      type: PropTypes.string,
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
      poster: PropTypes.object,
    }),
  ]),
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
  imageVideo1: undefined,
  imageVideo2: undefined,
  theme: 'dark',
  link1: undefined,
  link2: undefined,
  title1: undefined,
  title2: undefined,
  caption1: undefined,
  caption2: undefined,
};

export default DoubleImage;
