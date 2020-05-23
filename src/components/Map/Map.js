import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactDOMServer from 'react-dom/server';
import useScript from '~/customHooks/useScript';
import Loading from '~/components/Loading';
import Heading from '~/components/Heading';
import styles from './Map.module.css';
import MapOptions from './Map.options';
import MapFixture from './Map.fixture';

const GOOGLE_MAP_API_KEY = 'AIzaSyC8XkoYL8hh3iWiHhMWV07qmFerF3DO1W0';

export const STORE_LOCATION_TYPES = {
  DEPARTMENT_STORE: 'DEPARTMENT_STORE',
  SIGNATURE_STORE: 'SIGNATURE_STORE',
  STOCKIST: 'STOCKIST',
};

const Map = ({ className, center }) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const [isLoading, error] = useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`,
    id: 'google-map',
    async: true,
    defer: true,
    onLoad: () => {
      mapRef.current = createGoogleMap();
      setMarkers(() =>
        MapFixture.markers.map((marker, index) => createMarker(marker, index)),
      );
    },
  });

  function createGoogleMap() {
    return new window.google.maps.Map(mapContainerRef.current, {
      center,
      mapTypeControl: MapOptions.SHOW_MAP_TYPE_CONTROL,
      scrollwheel: MapOptions.SCROLL_WHEEL_ENABLED,
      styles: MapOptions.MAP_STYLES,
      zoom: MapOptions.MAP_INITIAL_ZOOM,
    });
  }

  function createMarker(
    { type, lat, lng, storeName, address, phoneNumber },
    index,
  ) {
    /* Is Location Type a Stockist or Department Store? */
    const isStockistMarker =
      type === STORE_LOCATION_TYPES.STOCKIST ||
      type === STORE_LOCATION_TYPES.DEPARTMENT_STORE;

    const markerType = isStockistMarker
      ? MapOptions.STOCKIST_MAP_MARKER
      : MapOptions.MAP_MARKER;

    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map: mapRef.current,
      icon: {
        anchor: new window.google.maps.Point(
          MapOptions.MAP_MARKER_ANCHOR_X,
          MapOptions.MAP_MARKER_ANCHOR_Y,
        ),
        labelOrigin: new window.google.maps.Point(
          MapOptions.MAP_LABEL_ORIGIN_X,
          MapOptions.MAP_LABEL_ORIGIN_Y,
        ),
        ...markerType,
      },
      title: storeName,
      label: {
        text: `${index + 1}`,
        ...MapOptions.MAP_LABEL,
      },
    });

    const info = new window.google.maps.InfoWindow({
      content: ReactDOMServer.renderToString(
        <div className={styles.info}>
          <Heading level={3} size="small">
            {storeName}
          </Heading>
          <Heading level={4} size="xSmall">
            {phoneNumber}
          </Heading>
        </div>,
      ),
    });

    marker.addListener('click', function() {
      info.open(mapRef.current, marker);
      mapRef.current.setZoom(MapOptions.MAP_MAX_ZOOM);
      mapRef.current.setCenter(marker.getPosition());
    });

    return marker;
  }

  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <Loading isLoading={isLoading} />
      <div className={styles.map} id="google-map" ref={mapContainerRef} />
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  className: PropTypes.string,
};

Map.defaultProps = {
  center: { lat: -37.8064, lng: 144.9826 },
  className: undefined,
};

export default Map;
