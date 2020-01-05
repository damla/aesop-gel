import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import find from 'lodash/find';
import svgs from './Icon.data';
import { generateSvgBlueprint } from './Icon.utils';
import styles from './Icon.module.css';

const propTypes = {
  classSet: PropTypes.string,
  dataRef: PropTypes.string,
  height: PropTypes.number,
  isActive: PropTypes.boolean,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.number,
};

const Icon: React = ({
  classSet = '',
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
  const className = cx(styles.base, styles[name], classSet, {
    [styles.isActive]: isActive,
  });

  return (
    <svg
      aria-labelledby={title ? uuidariaLabellBy : undefined}
      className={className}
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

Icon.propTypes = propTypes;

export default Icon;
