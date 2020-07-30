import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Figure from '~/components/Figure';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import Video from '~/components/Video';
import styles from './MediaBlock.module.css';

const MediaBlock = ({
  altText,
  caption,
  fallbackImage,
  heading,
  large,
  link,
  medium,
  poster,
  small,
  theme,
  type,
}) => {
  const Media = () => {
    return type === 'video' ? (
      <Video
        fallbackImage={fallbackImage}
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        hasPlayInFullScreen={false}
        isFullWidth={true}
        large={large}
        medium={medium}
        poster={poster}
        small={small}
      />
    ) : (
      <Image altText={altText} large={large} medium={medium} small={small} />
    );
  };

  const captionClassSet = cx(styles.caption, styles[theme]);

  return (
    <Figure className={styles.figure} hasCaptionBorder={false} theme={theme}>
      {link ? (
        <Hyperlink {...link} className={styles.imageLinkWrapper}>
          <Media />
        </Hyperlink>
      ) : (
        <Media />
      )}

      {(heading || caption) && (
        <figcaption className={styles.figcaption}>
          {heading && (
            <Heading level="3" size="xSmall" theme={theme}>
              {link ? (
                <Hyperlink {...link} theme={theme}>
                  {heading}
                </Hyperlink>
              ) : (
                heading
              )}
            </Heading>
          )}
          {caption && <div className={captionClassSet}>{caption}</div>}
        </figcaption>
      )}
    </Figure>
  );
};

MediaBlock.propTypes = {
  altText: PropTypes.string,
  caption: PropTypes.node,
  fallbackImage: PropTypes.object,
  heading: PropTypes.string,
  large: PropTypes.string,
  link: PropTypes.shape({
    hasTargetInNewWindow: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }),
  medium: PropTypes.string,
  poster: PropTypes.object,
  small: PropTypes.string,
  type: PropTypes.oneOf(['video', 'image']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

MediaBlock.defaultProps = {
  altText: undefined,
  caption: undefined,
  fallbackImage: undefined,
  heading: undefined,
  large: undefined,
  link: undefined,
  medium: undefined,
  poster: undefined,
  small: undefined,
  type: undefined,
  theme: 'dark',
};

export default MediaBlock;
