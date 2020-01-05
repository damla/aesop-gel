import React from 'react';
import cx from 'classnames';
import { useMutationDeleteCartPromotion } from '~/hooks/api/useMutationDeleteCartPromotion';
import Props from './CartDiscountItem.types';
import Button from '~/components/elements/Button';
import styles from './CartDiscountItem.module.css';

const CartDiscountItem: React.FunctionComponent<Props> = ({
  copy,
  className,
  promotion,
}) => {
  const classSet: string = cx(styles.base, className);
  const [deleteCartPromotion] = useMutationDeleteCartPromotion(promotion.code);

  return (
    <div
      className={classSet}
      data-test-ref={`CART_PROMOTION_${promotion.code}`}
    >
      <div className={styles.label}>
        {copy.appliedDiscountLabel} — {promotion.code}
      </div>
      <Button
        className={styles.removeButton}
        dataTestRef={`CART_PROMOTION_${promotion.code}_REMOVE_BUTTON`}
        inline={true}
        onClick={deleteCartPromotion}
        title={copy.removeDiscountTitle}
      >
        {copy.removeDiscountLabel}
      </Button>
      <div className={styles.price}>{promotion.discount.formattedValue}</div>
    </div>
  );
};

export default CartDiscountItem;
