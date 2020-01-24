import React from 'react';
import cx from 'classnames';
import BodyCopy from '~/components/BodyCopy';
import Video from '~/components/Video';
import { PARENT_PROP_TYPE_OPTIONS } from '~/components/BodyCopy/BodyCopy.prop-types';
import PROP_TYPES from './TextOverHero.prop-types';
import styles from './TextOverHero.module.css';

const TextOverHero = ({
  className,
  copy,
  cta,
  eyebrow,
  hasLightText = false,
  id,
  noTopMargin = false,
  subtitle,
  title,
  video,
}) => {
  const classSet = cx(
    styles.base,
    {
      [styles.noTopMargin]: noTopMargin,
    },
    className,
  );

  return (
    <section className={classSet}>
      <Video
        autoplay={video.autoplay}
        fallbackImage={video.fallbackImage}
        id={video.id}
        large={video.large}
        loop={video.loop}
        medium={video.medium}
        small={video.small}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <BodyCopy
            className={cx({
              [styles.hasLightText]: hasLightText,
            })}
            copy={copy}
            cta={cta}
            eyebrow={eyebrow}
            id={id}
            parent={PARENT_PROP_TYPE_OPTIONS.TEXT_OVER_HERO}
            primaryTitle={title}
            secondaryTitle={subtitle}
          />
        </div>
      </div>
    </section>
  );
};

TextOverHero.propTypes = PROP_TYPES;

export default TextOverHero;
