import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Map from './Map';
import MapFixture from './Map.fixture';

configure({ adapter: new Adapter() });

describe('<Map />', () => {
  it('should be defined', () => {
    expect(Map).toBeDefined();
  });

  it('should mount and unmount successfully', () => {
    const wrapper = mount(
      <Map
        center={MapFixture.customPlaceMarkerCenter}
        copy={MapFixture.copy}
        customMarker={MapFixture.customPinMarker}
        hasMarkerIndexes={true}
        id="google-map-spec"
        initialZoom={MapFixture.initialZoom}
        places={MapFixture.places}
      />,
    );

    wrapper.unmount();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Map
          center={MapFixture.customPlaceMarkerCenter}
          copy={MapFixture.copy}
          customMarker={MapFixture.customPinMarker}
          hasMarkerIndexes={true}
          id="google-map-spec"
          initialZoom={MapFixture.initialZoom}
          places={MapFixture.places}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
