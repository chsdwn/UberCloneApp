import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import { RideOptionButton } from '../components';
import { RideStackNavigationProp } from '../types';
import { Icon } from '@/components';
import { selectTimeTravelInformation } from '@/features/navigation/store/navigationSlice';

export const RideOptionsScreen = () => {
  const navigation = useNavigation<RideStackNavigationProp>();

  const travelTimeInformation = useSelector(selectTimeTravelInformation);
  const meters = travelTimeInformation?.meters || 0;
  const distance =
    meters > 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters} m`;

  const [selectedVehicle, setSelectedVehicle] = useState('');

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
          onPress={() => navigation.navigate('Navigate')}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {distance}
        </Text>
      </View>

      <ScrollView>
        <RideOptionButton
          title="Uber X"
          image={require('@/assets/icons/hatchback.png')}
          active={selectedVehicle === 'Uber X'}
          onPress={() => setSelectedVehicle('Uber X')}
        />
        <RideOptionButton
          title="Uber XL"
          multiplier={1.2}
          image={require('@/assets/icons/suv.png')}
          active={selectedVehicle === 'Uber XL'}
          onPress={() => setSelectedVehicle('Uber XL')}
        />
        <RideOptionButton
          title="Uber LUX"
          multiplier={1.75}
          image={require('@/assets/icons/minibus.png')}
          active={selectedVehicle === 'Uber LUX'}
          onPress={() => setSelectedVehicle('Uber LUX')}
        />
      </ScrollView>

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          className={`py-3 m-3 ${
            !selectedVehicle ? 'bg-gray-300' : 'bg-black'
          }`}
          disabled={!selectedVehicle}
        >
          <Text className="text-center text-white text-xl">
            Choose {selectedVehicle || 'Vehicle'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
