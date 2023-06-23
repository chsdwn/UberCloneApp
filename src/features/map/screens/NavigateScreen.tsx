import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';

import { RideStackNavigationProp } from '../types';
import { Icon } from '@/components';
import { Favourites } from '@/features/navigation/components';
import { setDestination } from '@/features/navigation/store/navigationSlice';

export const NavigateScreen = () => {
  const navigation = useNavigation<RideStackNavigationProp>();

  const dispatch = useDispatch();

  const handlePlaceSelect = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null,
  ) => {
    if (!detail?.geometry.location) return;

    const destination = {
      location: detail.geometry.location,
      description: data.description,
    };
    dispatch(setDestination(destination));

    navigation.navigate('RideOptions');
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Ali</Text>
      <View className="border-t border-gray-200 flex-shrink flex-1">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails
            debounce={400}
            query={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
            minLength={2}
            onPress={handlePlaceSelect}
            enablePoweredByContainer={false}
            styles={autocompleteStyles}
          />

          <Favourites />
        </View>

        <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
          <TouchableOpacity
            className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
            onPress={() => navigation.navigate('RideOptions')}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text className="text-white text-center">Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="black"
              size={16}
            />
            <Text className="text-center">Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const autocompleteStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: '#dddddf',
    borderRadius: 0,
    fontSize: 18,
  },
});
