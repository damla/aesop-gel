import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Image from '~/components/elements/Image';
import {
  VideoType as Props,
  VideoFallbackImageType as FallbackImageProps,
  VideoPosterType as VideoPosterProps,
} from '~/types/Video.types';
import styles from './Video.module.css';

export const FallbackImage: React.FunctionComponent<FallbackImageProps> = ({
  image,
}) =>
  typeof image !== 'undefined' ? (
    <Image
      altText={image.altText}
      large={image.large}
      medium={image.medium}
      small={image.small}
    />
  ) : null;

export const VideoPoster: React.FunctionComponent<VideoPosterProps> = ({
  image,
}) => {
  return (
    <Image
      altText={image.altText}
      large={image.large}
      medium={image.medium}
      small={image.small}
    />
  );
};

export const Video: React.FunctionComponent<Props> = ({
  autoplay,
  className,
  fallbackImage,
  id,
  large,
  loop,
  medium,
  playInFullScreen,
  poster,
  small,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (!large && !medium && !small && !fallbackImage) {
    return null;
  }

  const hanldeOnPosterClick = () => setIsPlaying(true);
  const hasVideo = large || medium || small;
  const classSet: string = cx(styles.base, className);
  const videoClassName = cx(
    styles.video,
    {
      [styles.fullScreen]: playInFullScreen,
    },
    {
      [styles.isVisible]: !poster || (poster && isPlaying),
    },
  );

  const posterClassName = cx(styles.poster, {
    [styles.isVisible]: !isPlaying,
  });

  return (
    <figure className={classSet} id={id} role="group">
      {poster && hasVideo && (
        <Button
          className={posterClassName}
          inline={true}
          onClick={hanldeOnPosterClick}
          title="play video"
        >
          <VideoPoster image={poster} />
        </Button>
      )}
      {hasVideo && (
        <video
          autoPlay={autoplay || isPlaying}
          className={videoClassName}
          controls={true}
          loop={loop}
          muted={true}
          playsInline={true}
        >
          {large && (
            <source media="(min-width: 1025px)" src={large} type="video/mp4" />
          )}
          {medium && (
            <source media="(min-width: 640px)" src={medium} type="video/mp4" />
          )}

          {small && (
            <source media="(min-width: 0px)" src={small} type="video/mp4" />
          )}
        </video>
      )}

      {typeof fallbackImage !== 'undefined' && !hasVideo && (
        <FallbackImage image={fallbackImage} />
      )}
    </figure>
  );
};

Video.defaultProps = {
  playInFullScreen: false,
};

export default Video;
