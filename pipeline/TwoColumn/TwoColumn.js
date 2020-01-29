import React from 'react';
import cx from 'classnames';
import ComponentMapper from '~/componentsComponentMapper/ComponentMapper';
import { PROP_TYPES } from './TwoColumn.prop-types';
import styles from './TwoColumn.module.css';

const TwoColumn = ({
  addExtraVerticalPadding = false,
  className,
  id,
  isSidebarRightAligned = false,
  main,
  sidebar,
}) => {
  const removeRightSpacing: boolean =
    main.type === 'componentAccordian' || main.type === 'componentSquareImage';

  const classSet = cx(styles.base, className, {
    [styles.rightAlignedSidebar]: isSidebarRightAligned,
    [styles.extraVerticalPadding]: addExtraVerticalPadding,
  });

  const mainClassName = cx(styles.main, {
    [styles.columnBleed]: removeRightSpacing,
  });

  if (sidebar && sidebar.fields && sidebar.type === 'componentBodyCopy') {
    sidebar.fields.parent = 'TwoColumn';
  }

  return (
    <div className={classSet} id={id}>
      {sidebar && (
        <aside className={styles.sidebar} id="sidebarColum">
          <ComponentMapper
            componentType={sidebar.type}
            fields={sidebar.fields}
            id={sidebar.id}
          />
        </aside>
      )}
      <div className={mainClassName} id="mainColumn">
        <ComponentMapper
          componentType={main.type}
          fields={main.fields}
          id={main.id}
        />
      </div>
    </div>
  );
};

TwoColumn.propTypes = PROP_TYPES;

export default TwoColumn;
