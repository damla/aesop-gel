import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import paragraphsFromDivs from '~/utils/paragraphsFromDivs/paragraphsFromDivs.js';
import { ParagraphSet } from '~/components/elements/Paragraph';
import PROP_TYPES from './CartInformation.prop-types';
import styles from './CartInformation.module.css';

const CartInformation = ({ children, className }) => {
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

CartInformation.propTypes = PROP_TYPES;

export default CartInformation;
