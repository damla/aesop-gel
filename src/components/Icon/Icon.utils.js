import React from 'react';
import styles from './Icon.module.css';

export const generateSvgBlueprint = (svg, uuidKey) => {
  function mapSvgData(svgData) {
    return svgData.map((item, i) => {
      const tagName = Object.keys(item)[0];
      const { classes, data, ...props } = item[tagName];

      props.className = styles[classes];
      props.key = `${uuidKey}${i}`;

      if (tagName === 'g') {
        return React.createElement(tagName, props, mapSvgData(data));
      }

      return React.createElement(tagName, props);
    });
  }

  return mapSvgData(svg.data);
};

export default { generateSvgBlueprint };
