import { Alert } from 'react-native';

import { create } from 'zustand';

import {
  Locale,
  getDeviceLanguage,
  normalizedLocales,
  setLanguageToI18n,
  translate,
} from '@/config/i18n';
import { storage } from '@/utils/storage';

type I18nStoreData = {
  locale: Locale;
  isLoadingLocale: boolean;
  setLocale: (locale: Locale) => Promise<void>;
  translate: typeof translate;
};

const getCurrentLocale = async () => {
  const locale = await storage.getLocale();

  if (locale) {
    return locale;
  }

  const deviceLanguage = getDeviceLanguage();
  const normalizedLocale = normalizedLocales[deviceLanguage];
  return normalizedLocale || 'en_US';
};

export const useI18nStore = create<I18nStoreData>()((set) => ({
  locale: 'en_US',
  isLoadingLocale: true,
  setLocale: async (locale) => {
    setLanguageToI18n(locale);

    await storage.setLocale(locale);

    set(() => ({ locale }));
  },
  translate,
}));

getCurrentLocale()
  .then((locale) => {
    setLanguageToI18n(locale);
    useI18nStore.setState({ locale });
  })
  .catch((err) => {
    console.log(JSON.stringify(err), null, 2);

    Alert.alert('Erro', 'Ocorreu um erro ao recuperar ao carregar o idioma.');
  })
  .finally(() => useI18nStore.setState({ isLoadingLocale: false }));
