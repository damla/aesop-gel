import React from 'react';
import Props from './ComponentMapper.types';
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

export default ComponentMapping;
