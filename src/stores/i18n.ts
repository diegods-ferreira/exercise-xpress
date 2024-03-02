import { create } from 'zustand';

import {
  Locale,
  getDeviceLanguage,
  normalizedLocales,
  setLanguageToI18n,
  translate,
} from '@/config/i18n';
import { storage } from '@/lib/react-native-mmkv';

type I18nStoreData = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translate: typeof translate;
};

const getCurrentLocale = (): Locale => {
  const locale = storage.getLocale();

  if (locale) {
    setLanguageToI18n(locale);
    return locale;
  }

  const deviceLanguage = getDeviceLanguage();
  const normalizedLocale = normalizedLocales[deviceLanguage] || 'en_US';

  setLanguageToI18n(normalizedLocale);

  return normalizedLocale;
};

export const useI18nStore = create<I18nStoreData>()((set) => ({
  locale: getCurrentLocale(),
  setLocale: (locale) => {
    setLanguageToI18n(locale);
    storage.setLocale(locale);
    set(() => ({ locale }));
  },
  translate,
}));
