import React from 'react';
import PROP_TYPES from './ComponentMapper.prop-types';
import { COMPONENTS_MAP as ComponentMap } from '~/constants';
import * as ComponentList from '~/components';

const ComponentMapping = ({
  componentType,
  id,
  fields,
}) => {
  const Component = ComponentList[ComponentMap[componentType]];

  return <Component id={id} {...fields} />;
};

ComponentMapping.propTypes = PROP_TYPES;

export default ComponentMapping;
