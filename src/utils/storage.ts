import AsyncStorage from '@react-native-async-storage/async-storage';

import { Locale } from '@/config/i18n';
import { AppSettings } from '@/types';

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
  getSettings: async () => {
    const settings = await AsyncStorage.getItem(`${STORAGE_KEY}:settings`);
    return (settings ? JSON.parse(settings) : {}) as AppSettings;
  },
  setSettings: async (settings: AppSettings) => {
    const stringifiedSettings = JSON.stringify(settings);
    await AsyncStorage.setItem(`${STORAGE_KEY}:settings`, stringifiedSettings);
  },
};
