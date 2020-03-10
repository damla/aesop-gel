import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Accordion as AccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Collapse } from 'react-collapse';
import Icon from '~/components/Icon';
import { isObjectPopulatedArray } from '~/utils/objects';
import styles from './Accordion.module.css';

const Accordion = ({ className, items }) => {
  const [activeNodes, setIsActiveNodes] = React.useState([]);

  if (!isObjectPopulatedArray(items)) {
    return null;
  }

  const classSet = cx(styles.base, className);

  const handleOnChange = nodes => setIsActiveNodes(nodes);

  const checkIsActive = id => activeNodes.includes(id);

  return (
    <AccessibleAccordion
      allowMultipleExpanded={true}
      allowZeroExpanded={true}
      className={classSet}
      onChange={handleOnChange}
    >
      {items.map(({ content, heading, id }) => (
        <AccordionItem className={styles.item} key={id} uuid={id}>
          <AccordionItemHeading className={styles.heading}>
            <AccordionItemButton className={styles.button}>
              <span>{heading}</span>
              <Icon
                className={styles.icon}
                height={16}
                name="downArrow"
                width={16}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.panel}>
            <Collapse
              isOpened={checkIsActive(id)}
              theme={{ collapse: styles.collapse }}
            >
              <div className={styles.content}>{content}</div>
            </Collapse>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </AccessibleAccordion>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      heading: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

Accordion.defaultProps = {
  className: undefined,
  items: undefined,
};

export default Accordion;
