import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { FavouriteButton } from '.';

export const Favourites = () => {
  return (
    <ScrollView>
      <FavouriteButton
        title="Home"
        address="Kadıköy, İstanbul"
        iconName="home"
      />
      <View className="bg-gray-200" style={styles.seperator} />
      <FavouriteButton
        title="Work"
        address="Beşiktaş, İstanbul"
        iconName="briefcase"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: StyleSheet.hairlineWidth,
  },
});
