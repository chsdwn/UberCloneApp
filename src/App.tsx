import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { Layout } from './components';
import { HomeRoute } from './routes';
import { store } from './store';

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Layout>
              <HomeRoute />
            </Layout>
          </SafeAreaView>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
