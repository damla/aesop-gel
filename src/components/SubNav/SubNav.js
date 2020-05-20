import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Select from '~/components/Select';
import List from '~/components/List';
import styles from './SubNav.module.css';

export const getLinkItems = (links, theme) =>
  links.map(({ id, style, children, url }) => ({
    content: (
      <Hyperlink
        className={styles.itemList}
        style={style}
        theme={theme}
        url={url}
      >
        {children}
      </Hyperlink>
    ),
    id,
  }));

const SubNav = ({
  className,
  heading,
  headingClassName,
  id,
  isSelect,
  links,
  theme,
}) => {
  useWindowHasResized();

  const classSet = cx(styles.base, className);
  const isSmallOrMediumViewport = ascertainIsSmallOrMediumOnlyViewport();
  const onChange = event => {
    window.location.href = event.target.value;
  };

  return (
    <nav className={classSet}>
      {heading && (
        <Heading
          className={cx(styles.heading, headingClassName)}
          level="3"
          noMargin={true}
          size="small"
          theme={theme}
        >
          {heading}
        </Heading>
      )}
      {isSelect && isSmallOrMediumViewport ? (
        <Select
          isBlock={isSelect}
          name={id}
          onChange={onChange}
          options={links.map(({ children, id, url }) => ({
            id,
            label: children,
            value: url,
          }))}
          theme={theme}
        />
      ) : (
        <List items={getLinkItems(links, theme)} theme={theme} />
      )}
    </nav>
  );
};

SubNav.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isSelect: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object)
    .isRequired /** @TODO hyperlink type */,
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

SubNav.defaultProps = {
  className: undefined,
  id: undefined,
  isSelect: false,
  links: undefined,
  heading: undefined,
  headingClassName: undefined,
  theme: 'dark',
};

export default SubNav;
