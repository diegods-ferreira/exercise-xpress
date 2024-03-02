import { create } from 'zustand';

import { Locale, getCurrentLocale, i18n } from '@/lib/i18next';
import { storage } from '@/lib/react-native-mmkv';

type I18nStoreData = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const useI18nStore = create<I18nStoreData>()((set) => ({
  locale: getCurrentLocale(),
  setLocale: (locale) => {
    i18n.changeLanguage(locale);
    storage.setLocale(locale);
    set(() => ({ locale }));
  },
}));
