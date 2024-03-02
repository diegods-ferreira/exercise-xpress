import { MMKV } from 'react-native-mmkv';

import { Locale } from '@/config/i18n';
import { AppSettings, ColorScheme } from '@/types';

const STORAGE_KEY = '@exercise-xpress';

const mmkv = new MMKV({
  id: `exercise-xpress-storage`,
  encryptionKey: 'exerciseXpress',
});

export const storage = {
  getColorScheme: () => {
    const colorScheme = mmkv.getString(`${STORAGE_KEY}:color-scheme`);
    return (colorScheme || 'dark') as ColorScheme;
  },
  setColorScheme: (colorScheme: ColorScheme) => {
    mmkv.set(`${STORAGE_KEY}:color-scheme`, colorScheme);
  },
  getLocale: () => {
    const locale = mmkv.getString(`${STORAGE_KEY}:locale`);
    return locale as Locale | undefined;
  },
  setLocale: (locale: Locale) => {
    mmkv.set(`${STORAGE_KEY}:locale`, locale);
  },
  getSettings: () => {
    const settings = mmkv.getString(`${STORAGE_KEY}:settings`);
    return (settings ? JSON.parse(settings) : {}) as AppSettings;
  },
  setSettings: (settings: AppSettings) => {
    const stringifiedSettings = JSON.stringify(settings);
    mmkv.set(`${STORAGE_KEY}:settings`, stringifiedSettings);
  },
};
