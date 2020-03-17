import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { ascertainIsMobile } from '~/utils/viewports';
import BodyCopy from '~/components/BodyCopy';
import Image from '~/components/Image';
import styles from './TextOverHero.module.css';

const TextOverHero = ({
  className,
  contentThemeOnMobile,
  copy,
  cta,
  eyebrow,
  heading,
  id,
  image,
  subHeading,
  theme,
}) => {
  useWindowHasResized();

  const isMobile = ascertainIsMobile();
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <section className={classSet}>
      <Image
        altText={image.altText}
        large={image.large}
        medium={image.medium}
        small={image.small}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <BodyCopy
            copy={copy}
            cta={cta}
            eyebrow={eyebrow}
            heading={heading}
            id={id}
            subHeading={subHeading}
            theme={isMobile ? contentThemeOnMobile : theme}
          />
        </div>
      </div>
    </section>
  );
};

TextOverHero.propTypes = {
  className: PropTypes.string,
  contentThemeOnMobile: PropTypes.oneOf(['dark', 'light']),
  copy: PropTypes.string,
  cta: PropTypes.object,
  eyebrow: PropTypes.string,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string,
  image: PropTypes.object.isRequired,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

TextOverHero.defaultProps = {
  className: undefined,
  contentThemeOnMobile: 'dark',
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  image: undefined,
  subHeading: undefined,
  theme: 'dark',
};

export default TextOverHero;
