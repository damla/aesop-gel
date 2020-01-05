import React from 'react';
import { Svg } from './Icon.types';
// @ts-ignore
import styles from './Icon.module.css';

export const generateSvgBlueprint = (svg: Svg, uuidKey: string) =>
  svg.data.map((item: object, i: number) => {
    const tagName = Object.keys(item)[0];
    const { classes, ...props } = item[tagName];

    props.className = styles[classes];
    props.key = `${uuidKey}${i}`;

    return React.createElement(tagName, props);
  });

export default { generateSvgBlueprint };
