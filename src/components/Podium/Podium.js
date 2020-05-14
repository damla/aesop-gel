import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from '~/components/Transition';
import styles from './Podium.module.css';

const Podium = forwardRef(function PodiumRef(
  {
    children,
    className,
    isActive,
    paddingBottom,
    paddingTop,
    transition,
    verticalPadding,
  },
  ref,
) {
  const classSet = cx(
    styles.base,
    styles[`${paddingTop ? paddingTop : verticalPadding}PaddingTop`],
    styles[`${paddingBottom ? paddingTop : verticalPadding}PaddingBottom`],
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
  verticalPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

Podium.defaultProps = {
  children: undefined,
  className: undefined,
  isActive: true,
  paddingTop: undefined,
  paddingBottom: undefined,
  transition: 'fade',
  verticalPadding: 'none',
};

export default Podium;
