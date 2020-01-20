import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Icon from '~/components/elements/Icon';
import CartDiscountDialog from './components/CartDiscountDialog';
import CartDiscountDialogFixture from './components/CartDiscountDialog/CartDiscountDialog.fixture';
import CartDiscountItem from './components/CartDiscountItem';
import CartDiscountItemFixture from './components/CartDiscountItem/CartDiscountItem.fixture';
// import Props from './CartDiscount.types';
import styles from './CartDiscount.module.css';

const CartDiscount = ({
  copy,
  className,
  promotions,
}) => {
  const classSet = cx(styles.base, className);
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <div className={classSet}>
      {promotions.length > 0 ? (
        <>
          {promotions.map(promotion => (
            <CartDiscountItem
              copy={CartDiscountItemFixture.copy}
              key={promotion.code}
              promotion={promotion}
            />
          ))}
        </>
      ) : (
        <>
          <Button
            className={styles.addButton}
            inline={true}
            onClick={() => setShowDialog(true)}
            title=""
          >
            {copy.applyDiscountLabel}
            <Icon
              className={styles.addIcon}
              height={22}
              name="plusAndCloseWithCircle"
              width={22}
            />
          </Button>
          <CartDiscountDialog
            className={styles.dialog}
            copy={CartDiscountDialogFixture.copy}
            handleClose={() => setShowDialog(false)}
            isVisible={showDialog}
          />
        </>
      )}
    </div>
  );
};

export default CartDiscount;
