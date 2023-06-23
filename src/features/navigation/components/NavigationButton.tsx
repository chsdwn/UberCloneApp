import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from '@/components';

type IProps = {
  title: string;
  image: ImageSourcePropType;
  disabled: boolean;
  onPress: () => void;
};
export const NavigationButton = ({
  title,
  image,
  disabled,
  onPress,
}: IProps) => (
  <TouchableOpacity
    className={`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 ${
      disabled ? 'opacity-20' : 'opacity-100'
    }`}
    onPress={onPress}
    disabled={disabled}
  >
    <View>
      <Image source={image} className="w-32 h-32" resizeMode="contain" />
      <Text className="mt-2 text-lg font-semibold">{title}</Text>
      <Icon
        className="p-2 bg-black rounded-full w-10 mt-4"
        name="arrowright"
        color="white"
        type="antdesign"
      />
    </View>
  </TouchableOpacity>
);
