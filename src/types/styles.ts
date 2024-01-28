import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';

export type StylesObject<T> = ReturnType<typeof StyleSheet.create<T>>;

export type StylesFunctionParams = typeof themes.dark & {
  edgeInsets: EdgeInsets;
};
