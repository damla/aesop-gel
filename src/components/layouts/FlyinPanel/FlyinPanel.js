import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import { useEscapeKeyListener } from '~/hooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/hooks/useOverflowHidden';
import Button from '~/components/elements/Button';
import Heading from '~/components/elements/Heading';
import Icon from '~/components/elements/Icon';
import Overlay from '~/components/elements/Overlay';
import Transition from '~/components/elements/Transition';
import PROP_TYPES from './FlyinPanel.prop-types';
import styles from './FlyinPanel.module.css';

const FlyinPanel = ({
  children,
  className,
  handleClose,
  heading,
  isVisible = false,
}) => {
  useEscapeKeyListener(handleClose);
  useOverflowHidden(isVisible);

  const classSet = cx(className);
  const labelledby = uuidv4();
  const describedby = uuidv4();
  const asideRole = 'dialog';
  const closeButtonTitle = 'Close';

  return (
    <aside
      aria-describedby={describedby}
      aria-hidden={!isVisible}
      aria-labelledby={labelledby}
      className={classSet}
      role={asideRole}
    >
      <Overlay handleClose={handleClose} isVisible={isVisible} />
      <Transition
        active={!!isVisible}
        mountOnEnter={true}
        type="slideRight"
        unmountOnExit={true}
      >
        <div className={styles.content}>
          <Button
            className={styles.closeButton}
            inline={true}
            onClick={handleClose}
            tabIndex={0}
            title={closeButtonTitle}
          >
            <Icon height={12} name="close" width={12} />
          </Button>
          {heading && (
            <Heading id={labelledby} level="2" size="small">
              {heading}
            </Heading>
          )}
          <div id={describedby}>{children}</div>
        </div>
      </Transition>
    </aside>
  );
};

FlyinPanel.propTypes = PROP_TYPES;

export default FlyinPanel;
