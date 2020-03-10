import React from 'react';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Icon from '~/components/Icon';
import Overlay from '~/components/Overlay';
import P from '~/components/Paragraph';
import Transition from '~/components/Transition';
import PROP_TYPES, {
  POSITION_PROP_TYPE_OPTIONS,
  THEME_PROP_TYPE_OPTIONS,
} from './DialogBanner.prop-types';
import styles from './DialogBanner.module.css';

const DialogBanner = ({
  className,
  cta,
  handleClose,
  isVisible = false,
  message,
  position = POSITION_PROP_TYPE_OPTIONS.TOP,
  showCloseButton = true,
  theme = THEME_PROP_TYPE_OPTIONS.DARK,
  title,
}) => {
  useEscapeKeyListener(handleClose);
  useOverflowHidden(isVisible);

  const classSet = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    styles[theme],
    styles[position],
    className,
  );

  return (
    <>
      <Overlay handleClose={handleClose} isVisible={isVisible} />
      <Transition
        active={!!isVisible}
        mountOnEnter={true}
        type="slideDown"
        unmountOnExit={true}
      >
        <aside className={classSet}>
          <div className={styles.iconContainer}>
            <Icon
              className={styles.warningIcon}
              height={22}
              name="warning"
              width={22}
            />
          </div>
          <div className={styles.contentContainer}>
            <Heading
              className={styles.title}
              level="1"
              noTopMargin={true}
              size="large"
            >
              {title}
            </Heading>
            <P className={styles.message}>{message}</P>
          </div>
          <div className={styles.closeContainer}>
            {showCloseButton && (
              <Button
                className={styles.closeButton}
                inline={true}
                onClick={handleClose}
                title="Close dialog button"
              >
                <Icon
                  className={styles.closeIcon}
                  height={12}
                  name="close"
                  width={12}
                />
              </Button>
            )}
            {cta && cta.text && (
              <Button
                className={styles.ctaButton}
                dataTestRef={cta.dataTestRef}
                hasLightText={true}
                id={cta.id}
                inline={true}
                target={cta.openInANewWindow ? '_blank' : '_self'}
                title={`contact us link to ${cta.url}`}
                to={cta.url}
              >
                {cta.text}
              </Button>
            )}
          </div>
        </aside>
      </Transition>
    </>
  );
};

DialogBanner.propTypes = PROP_TYPES;

export default DialogBanner;
