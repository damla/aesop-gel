import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import Heading from '~/components/Heading';
import styles from './FullscreenSection.module.css';
import Transition from '~/components/Transition';

const FullscreenSection = ({ hasSerifFont, text, theme }) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 1, '0% 0% -25% 0%');

  return (
    <div className={cx(styles.fullscreenSection)}>
      <Transition isActive={isOnScreen} type="slowFade">
        <div ref={ref}>
          <Heading
            hasSerifFont={hasSerifFont}
            level="4"
            size="medium"
            theme={theme}
          >
            {text}
          </Heading>
        </div>
      </Transition>
    </div>
  );
};

FullscreenSection.propTypes = {
  hasSerifFont: PropTypes.bool,
  text: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FullscreenSection.defaultProps = {
  hasSerifFont: false,
  text: undefined,
  theme: 'dark',
};

export default FullscreenSection;
