import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import { useEscapeKeyListener } from '~/hooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/hooks/useOverflowHidden';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Icon from '~/components/Icon';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import styles from './FlyinPanel.module.css';

const FlyinPanel = ({ children, className, heading, isVisible, onClose }) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, className);
  const labelledby = uuidv4();
  const describedby = uuidv4();
  const asideRole = 'dialog';
  const closeButtonTitle = 'Close';

  return (
    <>
      <Overlay isVisible={isVisible} onClose={onClose} />
      <Transition
        hasCSSTransitionMountOnEnter={true}
        hasCSSTransitionUnmountOnExit={true}
        isActive={!!isVisible}
        type="slideRight"
      >
        <aside
          aria-describedby={describedby}
          aria-hidden={!isVisible}
          aria-labelledby={labelledby}
          className={classSet}
          role={asideRole}
        >
          <Button
            className={styles.closeButton}
            isInline={true}
            onClick={onClose}
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
        </aside>
      </Transition>
    </>
  );
};

FlyinPanel.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

FlyinPanel.defaultProps = {
  children: undefined,
  className: undefined,
  heading: undefined,
  isVisible: false,
  onClose: undefined,
};

export default FlyinPanel;
