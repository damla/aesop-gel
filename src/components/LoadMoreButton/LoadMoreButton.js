import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useLoadMoreContext } from 'contexts';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ className, copy, isEnabled }) => {
  const loadMore = useLoadMoreContext();

  const classSet = cx(styles.base, styles.blockStyle, className);

  const handleOnClick = () => {
    const { actionTypes, dispatch, onClick } = loadMore;

    onClick(dispatch, actionTypes);
  };

  const { hasError, isLoading, isUpdateSuccessful } = loadMore;
  const actionLabel = `${copy.actionLabel}`;
  const updateNotification = `${copy.updateNotification}`;
  const showUpdateSuccessMessage = !isLoading && isUpdateSuccessful;

  const labelClassName = cx(
    styles.label,
    { [styles.hideLabel]: isLoading },
    { [styles.showSuccessMessage]: showUpdateSuccessMessage },
  );

  if (hasError) {
    /** @TODO Handle errors thrown by handleOnClick */
    console.error('updateError'); // eslint-disable-line
  }

  return (
    <Button
      className={classSet}
      isAlternate={true}
      isEnabled={!isLoading && isEnabled}
      onClick={handleOnClick}
      theme="light"
      title={actionLabel}
    >
      {isLoading && (
        <Loading className={styles.loading} isLoading={true} theme="dark" />
      )}
      <span className={labelClassName}>
        <span>{updateNotification}</span>
        <span>{actionLabel}</span>
      </span>
    </Button>
  );
};

LoadMoreButton.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    actionLabel: PropTypes.string,
    updateNotification: PropTypes.string,
  }),
  isEnabled: PropTypes.bool,
};

LoadMoreButton.defaultProps = {
  className: undefined,
  copy: {
    actionLabel: 'Load More',
    updateNotification: 'Successfully',
  },
  isEnabled: true,
};

export default LoadMoreButton;
