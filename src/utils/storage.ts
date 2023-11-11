import AsyncStorage from '@react-native-async-storage/async-storage';

import { Locale } from '@/config/i18n';

const STORAGE_KEY = '@exercise-xpress';

export const storage = {
  getColorScheme: async () => {
    const colorScheme = await AsyncStorage.getItem(
      `${STORAGE_KEY}:color-scheme`,
    );

    return (colorScheme || 'dark') as 'light' | 'dark';
  },
  setColorScheme: async (colorScheme: 'light' | 'dark') => {
    await AsyncStorage.setItem(`${STORAGE_KEY}:color-scheme`, colorScheme);
  },
  getLocale: async () => {
    const locale = await AsyncStorage.getItem(`${STORAGE_KEY}:locale`);
    return locale as Locale;
  },
  setLocale: async (locale: Locale) => {
    await AsyncStorage.setItem(`${STORAGE_KEY}:locale`, locale);
  },
};
