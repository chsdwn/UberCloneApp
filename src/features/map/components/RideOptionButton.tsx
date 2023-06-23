import { selectTimeTravelInformation } from '@/features/navigation/store/navigationSlice';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { calculateDuration, calculatePrice } from '../utils';

type IProps = {
  title: string;
  multiplier?: number;
  image: ImageSourcePropType;
  active: boolean;
  onPress: () => void;
};
export const RideOptionButton = ({
  title,
  multiplier = 1,
  image,
  active,
  onPress,
}: IProps) => {
  const travelTimeInformation = useSelector(selectTimeTravelInformation);
  const meters = travelTimeInformation?.meters || 0;
  const seconds = travelTimeInformation?.seconds || 0;

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(calculatePrice(meters, multiplier));

  return (
    <TouchableOpacity
      className={`flex-row justify-between items-center p-4 px-10 ${
        active ? 'bg-gray-200' : ''
      }`}
      onPress={onPress}
    >
      <Image resizeMode="contain" className="w-16 h-16" source={image} />
      <View className="-ml-6">
        <Text className="text-xl text-center font-semibold">{title}</Text>
        <Text className="text-center">{calculateDuration(seconds)}</Text>
      </View>
      <Text className="text-xl">{price}</Text>
    </TouchableOpacity>
  );
};
