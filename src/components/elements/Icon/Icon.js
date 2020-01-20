import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import find from 'lodash/find';
import PROP_TYPES from './Icon.prop-types';
import svgs from './Icon.data';
import { generateSvgBlueprint } from './Icon.utils';
import styles from './Icon.module.css';

const Icon = ({
  className = '',
  dataRef = '',
  height = 12,
  isActive = false,
  name = '',
  tabIndex = -1,
  title,
  width = 12,
}) => {
  const svg = find(svgs, { name });

  if (svg === undefined) {
    console.error('<Icon />: svg does no exist'); // eslint-disable-line no-console

    return null;
  }

  const uuidKey = uuidv4();
  const uuidariaLabellBy = `${name}-${uuidKey}`;
  const svgBlueprint = generateSvgBlueprint(svg, uuidKey);
  const classSet = cx(styles.base, styles[name], className, {
    [styles.isActive]: isActive,
  });

  return (
    <svg
      aria-labelledby={title ? uuidariaLabellBy : undefined}
      className={classSet}
      data-ref={dataRef}
      focusable="false"
      height={height}
      role="img"
      tabIndex={tabIndex}
      viewBox={svg.viewBox}
      width={width}
    >
      {title && <title id={uuidariaLabellBy}>{title}</title>}
      <g>{svgBlueprint}</g>
    </svg>
  );
};

Icon.propTypes = PROP_TYPES;

export default Icon;
