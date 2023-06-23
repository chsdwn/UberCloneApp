import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigateScreen, RideOptionsScreen } from '../screens';
import { RideStackParamList } from '../types';

const Stack = createStackNavigator<RideStackParamList>();
export const RideRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Navigate" component={NavigateScreen} />
      <Stack.Screen name="RideOptions" component={RideOptionsScreen} />
    </Stack.Navigator>
  );
};
