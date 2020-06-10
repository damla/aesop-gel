import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Loader } from 'google-maps';
import isFunction from 'lodash/isFunction';
import ReactDOMServer from 'react-dom/server';
import MarkerClusterer from '@google/markerclustererplus';
import { HYPERLINK_STYLE_TYPES, MAP, STORES, TRANSITIONS } from '~/constants';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumViewport,
} from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import Loading from '~/components/Loading';
import Transition from '~/components/Transition';
import MapOptions from './Map.options';
import InfoCard from './components/InfoCard';
import styles from './Map.module.css';

/** @TODO store and fetch this key via an API */
const GOOGLE_MAP_API_KEY = 'AIzaSyC8XkoYL8hh3iWiHhMWV07qmFerF3DO1W0';

const loader = new Loader(GOOGLE_MAP_API_KEY, {
  libraries: ['places'],
});

const Map = ({
  center,
  className,
  copy,
  customMarker,
  hasMarkerIndexes,
  id,
  initialZoom,
  places,
}) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const google = useRef(null);
  const activeInfoCard = useRef(null);
  const handleMapClick = useRef(null);
  const isIsSmallOnlyViewport = useRef(ascertainIsSmallOnlyViewport());
  const isIsMediumViewport = useRef(ascertainIsMediumViewport());

  const [activeInfoBlockData, setActiveInfoBlockData] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [markerCluster, setMarkerCluster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useWindowHasResized(() => {
    if (activeInfoCard.current) {
      activeInfoCard.current.close();
    }

    setActiveInfoBlockData(null);
  });

  isIsSmallOnlyViewport.current = ascertainIsSmallOnlyViewport();
  isIsMediumViewport.current = ascertainIsMediumViewport();

  const clearMapMarkers = () => {
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);
  };

  const clearMapClusters = () => {
    if (isFunction(markerCluster.clearMarkers)) {
      markerCluster.clearMarkers();
    }

    setMarkerCluster(null);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      google.current = await loader.load();
      mapRef.current = createGoogleMap();

      handleMapClick.current = google.current.maps.event.addListener(
        mapRef.current,
        'click',
        () => {
          if (activeInfoCard.current) {
            activeInfoCard.current.close();
          }
        },
      );

      setMarkers(() =>
        [customMarker, ...places]
          .filter(item => item?.lat !== undefined && item?.lng !== undefined)
          .map((marker, index) =>
            marker.type === MAP.MARKER_TYPE.PIN
              ? createPinMarker(marker, index)
              : createPlaceMarker(marker, index, index === 0),
          ),
      );

      setIsLoading(false);
    })();

    return function cleanup() {
      if (google.current) {
        google.current.maps.event.removeListener(handleMapClick.current);
        clearMapMarkers();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customMarker, hasMarkerIndexes, places]);

  useEffect(() => {
    if (google.current) {
      setMarkerCluster(
        () =>
          new MarkerClusterer(mapRef.current, markers, {
            imageExtension: 'png',
            imagePath: MAP.CLUSTER_IMAGE_PATH,
          }),
      );
    }
    return function cleanup() {
      clearMapClusters();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  const createGoogleMap = useCallback(() => {
    return new google.current.maps.Map(mapContainerRef.current, {
      center,
      mapTypeControl: MapOptions.SHOW_MAP_TYPE_CONTROL,
      scrollwheel: MapOptions.SCROLL_WHEEL_ENABLED,
      styles: MapOptions.MAP_STYLES,
      zoom: initialZoom,
      clickableIcons: false,
    });
  }, [center, initialZoom]);

  const createPinMarker = useCallback(
    (pin, index) => {
      return new google.current.maps.Marker({
        position: new google.current.maps.LatLng(pin.lat, pin.lng),
        clickable: false,
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
          ...MapOptions.MAP_MARKER,
        },
        label: {
          text: hasMarkerIndexes ? `${index + 1}` : ' ',
          ...MapOptions.MAP_LABEL,
        },
      });
    },
    [hasMarkerIndexes],
  );

  const createPlaceMarker = useCallback(
    (
      { address, lat, lng, openingHours, phoneNumber, storeName, storeType },
      index = 0,
      custom = false,
    ) => {
      const isStockistMarker =
        storeType === STORES.LOCATION_TYPES.STOCKIST ||
        storeType === STORES.LOCATION_TYPES.DEPARTMENT_STORE;

      const markerType =
        !custom && (customMarker || isStockistMarker)
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
          text: hasMarkerIndexes ? `${index + 1}` : ' ',
          ...MapOptions.MAP_LABEL,
        },
      });

      const infoCard = new google.current.maps.InfoWindow({
        content: ReactDOMServer.renderToString(
          <InfoCard
            address={address}
            copy={{
              directions: copy.directions,
              openingHours: copy.openingHours,
            }}
            count={index + 1}
            openingHours={openingHours}
            phoneNumber={phoneNumber}
            storeName={storeName}
          />,
        ),
      });

      marker.addListener('click', () => {
        if (isIsMediumViewport.current) {
          if (activeInfoCard.current) {
            activeInfoCard.current.close();
          }

          activeInfoCard.current = infoCard;
          activeInfoCard.current.open(mapRef.current, marker);
        }

        if (isIsSmallOnlyViewport.current) {
          setActiveInfoBlockData({
            address,
            count: index + 1,
            phoneNumber,
            storeName,
            openingHours,
          });
        }
      });

      return marker;
    },
    [
      copy,
      customMarker,
      hasMarkerIndexes,
      isIsMediumViewport,
      isIsSmallOnlyViewport,
    ],
  );

  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <Loading className={styles.loading} isLoading={isLoading} />
        <div className={styles.map} id={id} ref={mapContainerRef} />
      </div>
      <Transition
        hasCSSTransitionMountOnEnter={true}
        hasCSSTransitionUnmountOnExit={true}
        isActive={!!activeInfoBlockData}
        type={TRANSITIONS.TYPE.SHIFT_IN_DOWN}
      >
        <InfoCard
          address={activeInfoBlockData?.address}
          className={styles.infoCardBlock}
          copy={{
            directions: copy.directions,
            openingHours: copy.openingHours,
          }}
          count={activeInfoBlockData?.count}
          hasMarkerIndexes={hasMarkerIndexes}
          openingHours={activeInfoBlockData?.openingHours}
          phoneNumber={activeInfoBlockData?.phoneNumber}
          storeName={activeInfoBlockData?.storeName}
        />
      </Transition>
      <footer className={styles.footer}>
        <div className={styles.viewStoreLabel}>
          {copy.storeLocator?.message}
        </div>
        <div className={styles.viewStoreLinkWrapper}>
          <Hyperlink
            className={styles.viewStoreLink}
            style={HYPERLINK_STYLE_TYPES.INTERNAL_TEXT_LINK}
            title={copy.storeLocator?.title}
            url={copy.storeLocator?.url}
          >
            {copy.storeLocator?.label}
          </Hyperlink>
        </div>
      </footer>
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  className: PropTypes.string,
  copy: PropTypes.shape({
    directions: PropTypes.string,
    storeLocator: PropTypes.shape({
      label: PropTypes.string,
      message: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
    openingHours: PropTypes.shape({
      alternateHoursNote: PropTypes.string,
      heading: PropTypes.string,
    }),
  }),
  customMarker: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    type: PropTypes.oneOf(['PIN', 'PLACE']),
  }),
  hasMarkerIndexes: PropTypes.bool,
  id: PropTypes.string,
  initialZoom: PropTypes.number,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
      id: PropTypes.string,
      storeName: PropTypes.string,
      storeType: PropTypes.string,
      address: PropTypes.string,
      phoneNumber: PropTypes.string,
      openingHours: PropTypes.array,
    }),
  ),
};

Map.defaultProps = {
  center: {},
  className: undefined,
  copy: {
    directions: 'Directions to',
    storeLocator: {
      label: 'Store locator',
      message: 'Visit our nearby stores.',
      title: 'Open store locator link',
      url: '/',
    },
    openingHours: {
      alternateHoursNote: 'Special opening hours',
      heading: 'Opening hours',
    },
  },
  customMarker: undefined,
  hasMarkerIndexes: true,
  id: undefined,
  initialZoom: MapOptions.MAP_INITIAL_ZOOM,
  places: [],
};

export default Map;
