import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '@/features/map/screens';
import { NavigationScreen } from '@/features/navigation/screens';
import { HomeStackParamList } from '@/types';

const Stack = createStackNavigator<HomeStackParamList>();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Navigation" component={NavigationScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};
