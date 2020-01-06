import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import paragraphsFromDivs from '~/utils/paragraphsFromDivs/paragraphsFromDivs.js';
import { ParagraphSet } from '~/components/elements/Paragraph';
import Props from './CartInformation.types';
import styles from './CartInformation.module.css';

const CartInformation: React.FunctionComponent<Props> = ({
  children,
  className,
}) => {
  const classSet = cx(styles.base, className);

  return (
    <aside className={classSet}>
      <ParagraphSet>
        {typeof children === 'string'
          ? parse(paragraphsFromDivs(children))
          : children}
      </ParagraphSet>
    </aside>
  );
};

CartInformation.defaultProps = {};

export default CartInformation;
