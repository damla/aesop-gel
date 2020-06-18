import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useVariantSelectContext } from '~/contexts/VariantSelect.context';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({
  className,
  copy,
  dataTestRef,
  hasError,
  isEnabled,
  isFullWidth,
  isLoading,
  isUpdateSuccessful,
  onClick,
  productName,
  theme,
}) => {
  const { selectedVariant } = useVariantSelectContext();
  const { price, sku } = selectedVariant;

  const classSet = cx(
    styles.base,
    { [styles.fullWidth]: isFullWidth },
    className,
  );

  const handleOnClick = () => {
    onClick(selectedVariant.sku);
  };

  if (!selectedVariant) {
    return (
      <Button
        className={classSet}
        dataTestRef={dataTestRef}
        isAlternate={true}
        isEnabled={false}
        onClick={() => {}}
        theme={theme}
        title={copy.outOfStock?.title}
      >
        {copy.outOfStock?.label}
      </Button>
    );
  }

  const cartActionLabel = `${copy.cartAction} — ${price}`;
  const updateNotificationLabel = `${productName} ${copy.updateNotification}`;
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
      dataTestRef={dataTestRef}
      isAlternate={true}
      isEnabled={!isLoading && price && sku && isEnabled}
      onClick={handleOnClick}
      theme={theme}
      title={cartActionLabel}
    >
      {isLoading && (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLoading={true}
          theme={theme === 'dark' ? 'light' : 'dark'}
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
    outOfStock: PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  dataTestRef: PropTypes.string,
  hasError: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  isUpdateSuccessful: PropTypes.bool,
  onClick: PropTypes.func,
  productName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

AddToCartButton.defaultProps = {
  className: undefined,
  copy: {
    cartAction: 'Add to your cart',
    updateNotification: 'added to your cart',
    outOfStock: {
      label: 'Out of Stock',
      title: 'Out of stock',
    },
  },
  dataTestRef: undefined,
  hasError: false,
  isEnabled: true,
  isFullWidth: true,
  isLoading: false,
  isUpdateSuccessful: false,
  onClick: undefined,
  productName: undefined,
  theme: 'dark',
};

export default AddToCartButton;
