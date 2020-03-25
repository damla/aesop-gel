import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { isObjectPopulatedArray } from '~/utils/objects';
import { ascertainIsMobile } from '~/utils/viewports';
import BodyCopy from '~/components/BodyCopy';
import SubNav from '~/components/SubNav';
import Image from '~/components/Image';
import styles from './HeroWithContent.module.css';

const HeroWithContent = ({
  className,
  contentThemeOnMobile,
  copy,
  cta,
  eyebrow,
  heading,
  id,
  image,
  secondaryCta,
  subHeading,
  subNavLinks,
  theme,
}) => {
  useWindowHasResized();

  const isMobile = ascertainIsMobile();
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <section className={classSet}>
      <Image
        altText={image.altText}
        className={styles.image}
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
            secondaryCta={secondaryCta}
            subHeading={subHeading}
            theme={isMobile ? contentThemeOnMobile : theme}
          />
          {isObjectPopulatedArray(subNavLinks) && (
            <SubNav
              links={subNavLinks}
              theme={isMobile ? contentThemeOnMobile : theme}
            />
          )}
        </div>
      </div>
    </section>
  );
};

HeroWithContent.propTypes = {
  className: PropTypes.string,
  contentThemeOnMobile: PropTypes.oneOf(['dark', 'light']),
  copy: PropTypes.string,
  cta: PropTypes.object,
  eyebrow: PropTypes.string,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string,
  image: PropTypes.object.isRequired,
  secondaryCta: PropTypes.object,
  subHeading: PropTypes.string,
  subNavLinks: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.oneOf(['dark', 'light']),
};

HeroWithContent.defaultProps = {
  className: undefined,
  contentThemeOnMobile: 'dark',
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  image: undefined,
  secondaryCta: undefined,
  subHeading: undefined,
  subNavLinks: undefined,
  theme: 'dark',
};

export default HeroWithContent;
