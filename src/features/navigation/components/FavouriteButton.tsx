import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '@/components';

type IProps = {
  title: string;
  address: string;
  iconName: string;
};
export const FavouriteButton = ({ title, address, iconName }: IProps) => {
  return (
    <TouchableOpacity className="flex-row items-center p-5">
      <Icon
        className="mr-4 rounded-full bg-gray-300 p-3"
        name={iconName}
        type="ionicon"
        color="white"
        size={18}
      />
      <View>
        <Text className="font-semibold text-lg">{title}</Text>
        <Text className="text-gray-500">{address}</Text>
      </View>
    </TouchableOpacity>
  );
};
