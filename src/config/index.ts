import { Platform } from 'react-native';

export const API_URL = __DEV__ ? 'http://localhost:3000' : '';
export const IS_IOS = Platform.OS === 'ios';
