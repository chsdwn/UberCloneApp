import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Map } from '../components';
import { RideRoute } from '../routes';
import { Icon } from '@/components';
import { HomeStackNavigationProp } from '@/types';

export const MapScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  return (
    <View>
      <View className="h-1/3">
        <Map />
      </View>

      <View className="h-2/3">
        <RideRoute />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Navigation')}
        className="bg-gray-100 absolute top-8 left-8 p-3 rounded-full shadow-lg"
      >
        <Icon name="menu" />
      </TouchableOpacity>
    </View>
  );
};
