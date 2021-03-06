import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import find from 'lodash/find';
import svgs from './Icon.svgs';
import { generateSvgBlueprint } from './Icon.utils';
import styles from './Icon.module.css';

const Icon = ({
  className,
  dataRef,
  height,
  isActive,
  name,
  tabIndex,
  theme,
  title,
  width,
}) => {
  const svg = find(svgs, { name });

  if (svg === undefined) {
    return null;
  }

  const uuidKey = uuidv4();
  const uuidariaLabellBy = `${name}-${uuidKey}`;
  const svgBlueprint = generateSvgBlueprint(svg, uuidKey);
  const classSet = cx(
    styles.base,
    styles[name],
    styles[theme],
    {
      [styles.isActive]: isActive,
    },
    className,
  );

  return (
    <svg
      aria-labelledby={title ? uuidariaLabellBy : undefined}
      className={classSet}
      data-ref={dataRef}
      focusable="false"
      height={height}
      role="img"
      style={{ height: `${height}px`, width: `${width}px` }}
      tabIndex={tabIndex}
      viewBox={svg.viewBox}
      width={width}
    >
      {title && <title id={uuidariaLabellBy}>{title}</title>}
      <g>{svgBlueprint}</g>
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  dataRef: PropTypes.string,
  height: PropTypes.number,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
  width: PropTypes.number,
};

Icon.defaultProps = {
  className: undefined,
  dataRef: '',
  height: 12,
  isActive: false,
  name: '',
  tabIndex: -1,
  theme: 'dark',
  title: undefined,
  width: 12,
};

export default Icon;
