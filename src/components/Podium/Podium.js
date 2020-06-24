import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from '~/components/Transition';
import styles from './Podium.module.css';

const Podium = forwardRef(function PodiumRef(
  {
    backgroundColor,
    children,
    className,
    horizontalPadding,
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
    styles[`${paddingBottom ? paddingBottom : verticalPadding}PaddingBottom`],
    styles[`${horizontalPadding}PaddingLeft`],
    styles[`${horizontalPadding}PaddingRight`],
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <Transition isActive={isActive} type={transition}>
      <section className={classSet} ref={ref} style={style}>
        {children}
      </section>
    </Transition>
  );
});

Podium.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  horizontalPadding: PropTypes.oneOf(['none', 'small']),
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
  backgroundColor: undefined,
  children: undefined,
  className: undefined,
  horizontalPadding: 'none',
  isActive: true,
  paddingTop: undefined,
  paddingBottom: undefined,
  transition: 'fade',
  verticalPadding: 'none',
};

export default Podium;
