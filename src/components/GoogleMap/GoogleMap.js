import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isFunction from 'lodash/isFunction';
import ReactDOMServer from 'react-dom/server';
import MarkerClusterer from '@google/markerclusterer';
import {
  HYPERLINK_STYLE_TYPES,
  GOOGLE_MAPS,
  STORES,
  TRANSITIONS,
} from '~/constants';
import { useGoogleMapsContext } from '~/contexts/GoogleMaps.context';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumViewport,
} from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import Loading from '~/components/Loading';
import Transition from '~/components/Transition';
import GoogleMapOptions from './GoogleMap.options';
import InfoCard from './components/InfoCard';
import styles from './GoogleMap.module.css';

const GoogleMap = ({
  center,
  className,
  copy,
  customMarker,
  hasMarkerIndexes,
  id,
  initialZoom,
  places,
}) => {
  const { googleMap, isLoading } = useGoogleMapsContext();
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const activeInfoCard = useRef(null);
  const handleMapClick = useRef(null);
  const isIsSmallOnlyViewport = useRef(ascertainIsSmallOnlyViewport());
  const isIsMediumViewport = useRef(ascertainIsMediumViewport());
  const [activeInfoBlockData, setActiveInfoBlockData] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [markerCluster, setMarkerCluster] = useState([]);

  useWindowHasResized(() => {
    if (activeInfoCard.current) {
      activeInfoCard.current.close();
    }

    setActiveInfoBlockData(null);
  });

  const createGoogleMap = useCallback(() => {
    if (googleMap) {
      return new googleMap.maps.Map(mapContainerRef.current, {
        center,
        mapTypeControl: GoogleMapOptions.SHOW_MAP_TYPE_CONTROL,
        scrollwheel: GoogleMapOptions.SCROLL_WHEEL_ENABLED,
        styles: GoogleMapOptions.MAP_STYLES,
        zoom: initialZoom,
        clickableIcons: false,
      });
    }
  }, [center, initialZoom, googleMap]);

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
    mapRef.current = createGoogleMap();

    if (googleMap) {
      handleMapClick.current = googleMap.maps.event.addListener(
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
            marker.type === GOOGLE_MAPS.MARKER_TYPE.PIN
              ? createPinMarker(marker, index)
              : createPlaceMarker(marker, index, index === 0),
          ),
      );
    }

    return function cleanup() {
      if (googleMap) {
        googleMap.maps.event.removeListener(handleMapClick.current);
        clearMapMarkers();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createGoogleMap, customMarker, places, googleMap]);

  useEffect(() => {
    const options = {
      styles: [
        {
          url: GOOGLE_MAPS.CLUSTER_IMAGE_PATH, // https://www.aesop.com/_ui/responsive/common/images/icons/map-cluster-icon.svg
          ...GoogleMapOptions.MAP_MARKER_CLUSTER,
        },
      ],
    };

    if (googleMap) {
      setMarkerCluster(
        () => new MarkerClusterer(mapRef.current, markers, options),
      );
    }
    return function cleanup() {
      clearMapClusters();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  const createPinMarker = useCallback(
    (pin, index) => {
      return new googleMap.maps.Marker({
        position: new googleMap.maps.LatLng(
          parseFloat(pin.lat),
          parseFloat(pin.lng),
        ),
        clickable: false,
        map: mapRef.current,
        icon: {
          anchor: new googleMap.maps.Point(
            GoogleMapOptions.MAP_MARKER_ANCHOR_X,
            GoogleMapOptions.MAP_MARKER_ANCHOR_Y,
          ),
          labelOrigin: new googleMap.maps.Point(
            GoogleMapOptions.MAP_LABEL_ORIGIN_X,
            GoogleMapOptions.MAP_LABEL_ORIGIN_Y,
          ),
          ...GoogleMapOptions.MAP_MARKER,
        },
        label: {
          text: hasMarkerIndexes ? `${index + 1}` : ' ',
          ...GoogleMapOptions.MAP_LABEL,
        },
      });
    },
    [hasMarkerIndexes, googleMap],
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
          ? GoogleMapOptions.STOCKIST_MAP_MARKER
          : GoogleMapOptions.MAP_MARKER;

      const marker = new googleMap.maps.Marker({
        position: new googleMap.maps.LatLng(parseFloat(lat), parseFloat(lng)),
        map: mapRef.current,
        icon: {
          anchor: new googleMap.maps.Point(
            GoogleMapOptions.MAP_MARKER_ANCHOR_X,
            GoogleMapOptions.MAP_MARKER_ANCHOR_Y,
          ),
          labelOrigin: new googleMap.maps.Point(
            GoogleMapOptions.MAP_LABEL_ORIGIN_X,
            GoogleMapOptions.MAP_LABEL_ORIGIN_Y,
          ),
          ...markerType,
        },
        title: storeName,
        label: {
          text: hasMarkerIndexes ? `${index + 1}` : ' ',
          ...GoogleMapOptions.MAP_LABEL,
        },
      });

      const infoCard = new googleMap.maps.InfoWindow({
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
      googleMap,
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

GoogleMap.propTypes = {
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

GoogleMap.defaultProps = {
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
  initialZoom: GoogleMapOptions.MAP_INITIAL_ZOOM,
  places: [],
};

export default GoogleMap;
