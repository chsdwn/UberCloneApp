import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { GOOGLE_MAPS_API_KEY } from '@env';

import { Favourites, NavigationButton } from '../components';
import {
  selectOrigin,
  setDestination,
  setOrigin,
} from '../store/navigationSlice';
import { HomeStackNavigationProp } from '@/types';

export const NavigationScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  const handlePlaceSelect = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null,
  ) => {
    if (!detail?.geometry.location) return;

    const newOrigin = {
      location: detail.geometry.location,
      description: data.description,
    };
    dispatch(setOrigin(newOrigin));
    dispatch(setDestination(null));
  };

  return (
    <View className="p-5">
      <Image
        source={require('@/assets/images/Uber.png')}
        className="w-24 h-24"
        resizeMode="contain"
      />

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails
        onPress={handlePlaceSelect}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        minLength={2}
        enablePoweredByContainer={false}
        styles={placesAutocompleteStyles}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator>
        <NavigationButton
          title="Get a ride"
          image={require('@/assets/images/car.png')}
          onPress={() => navigation.navigate('Map')}
          disabled={!origin}
        />
        <NavigationButton
          title="Order food"
          image={require('@/assets/images/food.png')}
          onPress={() => {}}
          disabled={!origin}
        />
      </ScrollView>

      <Favourites />
    </View>
  );
};

const placesAutocompleteStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
  },
});
