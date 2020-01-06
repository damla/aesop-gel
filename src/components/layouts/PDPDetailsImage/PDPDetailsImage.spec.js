import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import PDPDetailsImage from './PDPDetailsImage';
import { getImageSource } from './PDPDetailsImage.utils';
import PDPDetailsImageFixture from './PDPDetailsImage.fixture';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<PDPDetailsImage />', () => {
  it('should be defined', () => {
    expect(PDPDetailsImage).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <PDPDetailsImage
        id="PDPDetailsImage"
        image={PDPDetailsImageFixture.image}
        onVariantChange={mockFn}
        selectedOption="aesop"
        variantOptions={[{ size: '100ml', sku: 'aesop' }]}
      />,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('should return `null` if no image is passed', () => {
    const component = shallow(
      <PDPDetailsImage
        id="PDPDetailsImage"
        onVariantChange={mockFn}
        selectedOption="aesop"
        variantOptions={[{ size: '100ml', sku: 'aesop' }]}
      />,
    );
    expect(component.type()).toEqual(null);
  });
});

describe('PDPDetailsImage.utils.getImageSource', () => {
  it('should return undefined if viewportImage is not found', () => {
    const actual = getImageSource('LARGE.VIEWPORT', [
      {
        src: 'foo',
        viewport: 'bar',
      },
    ]);

    expect(actual).toBe(undefined);
  });

  it('should return the src of a found viewport image set', () => {
    const actual = getImageSource('LARGE', PDPDetailsImageFixture.image.sizes);

    expect(actual).toBe(
      `${process.env.GATSBY_MEDIA}/images/products/Skin_Amazing_Face_Cleanser_100mL_large.png 2x`,
    );
  });
});

describe('PDPDetailsImage.utils.getImageSource env vars', () => {
  const CURRENT_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...CURRENT_ENV };
    delete process.env.GATSBY_MEDIA;
  });

  afterEach(() => {
    process.env = CURRENT_ENV;
  });

  it('should return a correct image url even if the process.env.media is set to falsy', () => {
    process.env.GATSBY_MEDIA = '';

    const actual = getImageSource('LARGE', PDPDetailsImageFixture.image.sizes);

    expect(actual).toBe(
      `${process.env.GATSBY_MEDIA}/images/products/Skin_Amazing_Face_Cleanser_100mL_large.png 2x`,
    );
  });
});
