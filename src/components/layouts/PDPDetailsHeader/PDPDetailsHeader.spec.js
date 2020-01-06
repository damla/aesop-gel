import React from 'react';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import PDPDetailsHeader from './PDPDetailsHeader';

describe('<PDPDetailsHeader />', () => {
  it('should be defined', () => {
    expect(PDPDetailsHeader).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <PDPDetailsHeader
        description="A clarifying formulation that removes surface impurities and offers mild exfoliation from Lactic Acid. Ideal for maintaining immaculately clean skin in polluted urban environments."
        productName="Parsley Seed Facial Cleanser"
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
