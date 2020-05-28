import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Loader } from 'google-maps';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactDOMServer from 'react-dom/server';
import MarkerClusterer from '@google/markerclustererplus';
import Hyperlink from '~/components/Hyperlink';
import Loading from '~/components/Loading';
import Heading from '~/components/Heading';
import styles from './Map.module.css';
import MapOptions from './Map.options';

const GOOGLE_MAP_API_KEY = 'AIzaSyC8XkoYL8hh3iWiHhMWV07qmFerF3DO1W0';

const InfoCard = ({
  address,
  copy = {
    directions: 'Directions to ',
    specialHoursNote: 'Special opening hours',
  },
  phoneNumber,
  storeName,
  openingHours = [
    { dayName: 'Monday', hours: '11am - 4pm', id: 1 },
    { dayName: 'Tuesday', hours: '10am - 3pm', id: 2, special: true },
  ],
}) => {
  return (
    <div className={styles.info}>
      <Heading level="3" size="xSmall">
        {storeName}
      </Heading>
      {address && (
        <div className={styles.address}>
          <Hyperlink
            className={styles.hyperlink}
            dataTestRef="DIRECTION_URL"
            hasTargetInNewWindow={true}
            style="External Text Link"
            title={`${copy.directions} ${address}`}
            url={`https://www.google.com/maps?saddr=Current+Location&daddr=${address}`}
          >
            {address}
          </Hyperlink>
        </div>
      )}
      {phoneNumber && <div className={styles.phoneNumber}>{phoneNumber}</div>}

      {openingHours.length !== 0 && (
        <>
          <Heading
            className={styles.openingHoursHeading}
            hasTopMargin={false}
            level="4"
            size="xXSmall"
          >
            Opening hours
          </Heading>

          <ul className={styles.openingHoursList}>
            {openingHours.map(item => (
              <li className={styles.openingHoursItem} key={item.id}>
                <span className={styles.dayName}>{item.dayName}</span>
                <span
                  className={cx(styles.hours, {
                    [styles.specialHours]: item.special,
                  })}
                >
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.specialHoursNote}>{copy.specialHoursNote}</div>
        </>
      )}
    </div>
  );
};

InfoCard.propTypes = {
  address: PropTypes.string,
  copy: PropTypes.object,
  openingHours: PropTypes.array,
  phoneNumber: PropTypes.string,
  storeName: PropTypes.string,
};

export const STORE_LOCATION_TYPES = {
  DEPARTMENT_STORE: 'DEPARTMENT_STORE',
  SIGNATURE_STORE: 'SIGNATURE_STORE',
  STOCKIST: 'STOCKIST',
};

const Map = ({ className, center, places }) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const google = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [markerCluster, setMarkerCluster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      const loader = new Loader(GOOGLE_MAP_API_KEY, {
        libraries: ['places'],
      });

      google.current = await loader.load();
      mapRef.current = createGoogleMap();

      setMarkers(() =>
        places.map((marker, index) => createMarker(marker, index)),
      );

      setIsLoading(false);
      setIsMapReady(true);
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  useEffect(() => {
    if (google.current) {
      setMarkerCluster(
        () =>
          new MarkerClusterer(mapRef.current, markers, {
            imagePath:
              'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
          }),
      );
    }
  }, [markers]);

  const createGoogleMap = useCallback(() => {
    return new google.current.maps.Map(mapContainerRef.current, {
      center,
      mapTypeControl: MapOptions.SHOW_MAP_TYPE_CONTROL,
      scrollwheel: MapOptions.SCROLL_WHEEL_ENABLED,
      styles: MapOptions.MAP_STYLES,
      zoom: MapOptions.MAP_INITIAL_ZOOM,
    });
  }, [center]);

  const createMarker = useCallback(
    ({ type, lat, lng, storeName, address, phoneNumber }, index) => {
      const isStockistMarker =
        type === STORE_LOCATION_TYPES.STOCKIST ||
        type === STORE_LOCATION_TYPES.DEPARTMENT_STORE;

      const markerType = isStockistMarker
        ? MapOptions.STOCKIST_MAP_MARKER
        : MapOptions.MAP_MARKER;

      const marker = new google.current.maps.Marker({
        position: new google.current.maps.LatLng(lat, lng),
        map: mapRef.current,
        icon: {
          anchor: new google.current.maps.Point(
            MapOptions.MAP_MARKER_ANCHOR_X,
            MapOptions.MAP_MARKER_ANCHOR_Y,
          ),
          labelOrigin: new google.current.maps.Point(
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

      const infoCard = new google.current.maps.InfoWindow({
        content: ReactDOMServer.renderToString(
          <InfoCard
            address={address}
            phoneNumber={phoneNumber}
            storeName={storeName}
          />,
        ),
      });

      marker.addListener('click', function() {
        infoCard.open(mapRef.current, marker);
        mapRef.current.setCenter(marker.getPosition());
        mapRef.current.setZoom(MapOptions.MAP_MAX_ZOOM);
      });

      return marker;
    },
    [],
  );

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
  places: PropTypes.array,
};

Map.defaultProps = {
  center: {},
  className: undefined,
  places: [],
};

export default Map;
