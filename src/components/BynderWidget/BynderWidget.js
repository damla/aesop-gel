import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useScript from '~/customHooks/useScript';
import styles from './BynderWidget.module.css';

const BynderWidget = ({ className, heading, id, theme }) => {
  useScript(
    'https://d8ejoa1fys2rk.cloudfront.net/bynder-embed/latest/bynder-embed.js',
    'bynder-widgets-js',
    {
      accountUrl: 'assetportal.aesop.com',
      language: 'en',
    },
  );

  const classSet = cx(styles.base, styles[theme], className);

  return (
    <article className={classSet} id={id}>
      <h3 className={styles.heading}>{heading}</h3>
      <div
        data-bynder-widget="media-list"
        data-collection-id={id}
        data-rows="3"
      />
    </article>
  );
};

BynderWidget.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

BynderWidget.defaultProps = {
  className: undefined,
  heading: undefined,
  id: undefined,
  theme: 'dark',
};

export default BynderWidget;
