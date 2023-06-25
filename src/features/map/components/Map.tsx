import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

import { getTravelTime } from '../api';
import {
  selectDestination,
  selectOrigin,
  setTimeTravelInformation,
} from '@/features/navigation/store/navigationSlice';

const identifiers = {
  ORIGIN: 'origin',
  DESTINATION: 'destination',
};

export const Map = () => {
  const origin = useSelector(selectOrigin);

  const dispatch = useDispatch();
  const destination = useSelector(selectDestination);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin || !destination) return;
    if (!mapRef.current) return;

    const id = setTimeout(() => {
      mapRef.current!.fitToSuppliedMarkers(
        [identifiers.ORIGIN, identifiers.DESTINATION],
        { edgePadding: { top: 50, bottom: 50, left: 50, right: 50 } },
      );
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const setTravelTime = async () => {
      const data = await getTravelTime(
        origin.description,
        destination.description,
      );
      dispatch(
        setTimeTravelInformation({
          meters: data.distance.value,
          seconds: data.duration.value,
        }),
      );
    };
    setTravelTime();
  }, [origin, destination, dispatch]);

  if (!origin) return null;

  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      mapType="standard"
      provider="google"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
    >
      {destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {destination && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier={identifiers.DESTINATION}
        />
      )}

      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier={identifiers.ORIGIN}
      />
    </MapView>
  );
};
