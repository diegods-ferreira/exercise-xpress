import { Alert } from 'react-native';

import { create } from 'zustand';

import { AppSettings } from '@/types';
import { storage } from '@/utils/storage';

type SettingsStoreData = {
  settings: AppSettings;
  isLoadingSettings: boolean;
  updateSetting: <T extends keyof AppSettings>(
    setting: T,
    value: AppSettings[T],
  ) => Promise<void>;
};

const loadSettings = async () => {
  const settings = await storage.getSettings();
  return settings;
};

export const useSettingsStore = create<SettingsStoreData>()((set, get) => ({
  settings: {
    showWelcomeScreen: true,
    weight: 'kilogram',
    distance: 'meters',
    bodyMeasurements: 'centimeters',
  },
  isLoadingSettings: true,
  updateSetting: async (setting, value) => {
    const { settings } = get();
    settings[setting] = value;
    await storage.setSettings(settings);
    set(() => ({ settings }));
  },
}));

loadSettings()
  .then((settings) =>
    useSettingsStore.setState((state) => ({
      settings: { ...state.settings, ...settings },
    })),
  )
  .catch((err) => {
    console.log(JSON.stringify(err), null, 2);

    Alert.alert('Erro', 'Ocorreu um erro ao carregar as configurações.');
  })
  .finally(() => useSettingsStore.setState({ isLoadingSettings: false }));
