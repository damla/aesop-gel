import React from 'react';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import PDPDetailsSection from './PDPDetailsSection';
import PDPDetailsSectionFixture from './PDPDetailsSection.fixture';

jest.mock('uuid/v4', () => {
  let value = 0;
  return () => value++;
});

describe('<PDPDetailsSection />', () => {
  it('should be defined', () => {
    expect(PDPDetailsSection).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <PDPDetailsSection
        copy={PDPDetailsSectionFixture.copy}
        field1Description="Normal, combination and troubled skin"
        field1Label="Suited to"
        field2Description="Clarified, smooth and gently cleanse"
        field2Label="Skin feel"
        ingredientText="Licorice Root, Lactic Acid, Blackcurrant Seed"
        keyIngredient="Licorice Root, Lactic Acid, Blackcurrant Seed"
        price="$625.00"
        sku="AHR21"
      />,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
