import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ComponentMapper from './ComponentMapper';

configure({ adapter: new Adapter() });

describe('<ComponentMapper />', () => {
  it('should be defined', () => {
    expect(ComponentMapper).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ComponentMapper
          componentType="componentBodyCopy"
          fields={{
            id: 'Anti-oxidant',
            primaryTitle: 'Aesop & The Paris Review: A Partnership Extended',
            quote:
              'Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream.',
            secondaryTitle: 'Active Nutrients',
          }}
          id="phylosophy-body"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
