import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AddToCartContext from '~/contexts/AddToCart.context';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({
  className,
  copy,
  dataTestRef,
  isEnabled,
  price,
  productName,
}) => {
  const {
    isLoading,
    isUpdateSuccessful,
    handleOnClick,
    updateError,
  } = useContext(AddToCartContext);
  const classSet = cx(styles.base, className);
  const cartActionLabel = `${copy.cartAction} — ${price}`;
  const updateNotificationLabel = `${productName} ${copy.updateNotification}`;
  const showUpdateSuccessMessage = !isLoading && isUpdateSuccessful;
  const labelClassName = cx(
    styles.label,
    { [styles.hideLabel]: isLoading },
    { [styles.showSuccessMessage]: showUpdateSuccessMessage },
  );

  if (updateError) {
    console.error(updateError);
  }

  return (
    <Button
      className={classSet}
      dataTestRef={dataTestRef}
      isAlternate={true}
      isEnabled={!isLoading && isEnabled}
      onClick={handleOnClick}
      title="Add to cart button"
    >
      {isLoading && (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLoading={isLoading}
          theme="light"
        />
      )}
      <span
        className={labelClassName}
        data-test-ref={
          showUpdateSuccessMessage ? `${dataTestRef}_SUCCESS` : undefined
        }
      >
        <span>{updateNotificationLabel}</span>
        <span>{cartActionLabel}</span>
      </span>
    </Button>
  );
};

AddToCartButton.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    cartAction: PropTypes.string,
    updateNotification: PropTypes.string,
  }),
  dataTestRef: PropTypes.string,
  isEnabled: PropTypes.bool,
  price: PropTypes.string,
  productName: PropTypes.string,
  sku: PropTypes.string,
};

AddToCartButton.defaultProps = {
  className: undefined,
  copy: {
    cartAction: 'Add to your cart',
    updateNotification: 'added to your cart',
  },
  dataTestRef: undefined,
  isEnabled: true,
  price: undefined,
  productName: '',
  sku: undefined,
};

export default AddToCartButton;
