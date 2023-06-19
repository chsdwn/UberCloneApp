import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from './store';

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView className="flex-1 bg-gray-300">
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View className="flex-1">
            <Text className="font-bold text-red-500 text-center">
              Uber Clone
            </Text>
          </View>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};
