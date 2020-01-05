import React from 'react';
import styles from './Icon.module.css';

export const generateSvgBlueprint = (svg, uuidKey) =>
  svg.data.map((item, i) => {
    const tagName = Object.keys(item)[0];
    const { classes, ...props } = item[tagName];

    props.className = styles[classes];
    props.key = `${uuidKey}${i}`;

    return React.createElement(tagName, props);
  });

export default { generateSvgBlueprint };
