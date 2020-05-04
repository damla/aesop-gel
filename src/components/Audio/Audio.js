import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Audio.module.css';

const Audio = ({ className }) => {
  const classSet = cx(styles.base, className);

  return (
    <figure className={classSet}>
      <canvas />
      <audio
        controls={true}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/shoptalk-clip.mp3"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
};

Audio.propTypes = {
  className: PropTypes.string,
};

Audio.defaultProps = {
  className: undefined,
};

export default Audio;
