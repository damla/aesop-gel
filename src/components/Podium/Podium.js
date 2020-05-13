import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from '~/components/Transition';
import styles from './Podium.module.css';

const Podium = forwardRef(function PodiumRef(
  { children, className, isActive, paddingTop, paddingBottom, transition },
  ref,
) {
  const classSet = cx(
    styles.base,
    styles[`${paddingTop}PaddingTop`],
    styles[`${paddingBottom}PaddingBottom`],
    className,
  );

  return (
    <Transition isActive={isActive} type={transition}>
      <section className={classSet} ref={ref}>
        {children}
      </section>
    </Transition>
  );
});

Podium.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  paddingTop: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  paddingBottom: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  transition: PropTypes.oneOf([
    'fade',
    'shiftInDown',
    'shiftInLeft',
    'slideDown',
    'slideRight',
    'slowFade',
    'zoom',
  ]),
};

Podium.defaultProps = {
  children: undefined,
  className: undefined,
  isActive: true,
  paddingTop: 'none',
  paddingBottom: 'none',
  transition: 'fade',
};

export default Podium;
