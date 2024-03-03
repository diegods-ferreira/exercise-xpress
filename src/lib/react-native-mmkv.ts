import { MMKV } from 'react-native-mmkv';

import { AppSettings } from '@/types';

type SettingConfig = {
  storageKey: `settings.${keyof AppSettings}`;
  storageGetFn: 'getBoolean' | 'getNumber' | 'getString';
};

const settingsConfig: Record<keyof AppSettings, SettingConfig> = {
  showWelcomeScreen: {
    storageKey: 'settings.showWelcomeScreen',
    storageGetFn: 'getBoolean',
  },
  colorScheme: {
    storageKey: 'settings.colorScheme',
    storageGetFn: 'getString',
  },
  locale: {
    storageKey: 'settings.locale',
    storageGetFn: 'getString',
  },
  weight: {
    storageKey: 'settings.weight',
    storageGetFn: 'getString',
  },
  distance: {
    storageKey: 'settings.distance',
    storageGetFn: 'getString',
  },
  bodyMeasurements: {
    storageKey: 'settings.bodyMeasurements',
    storageGetFn: 'getString',
  },
};

const mmkv = new MMKV({
  id: `exercise-xpress-storage`,
  encryptionKey: 'exerciseXpress',
});

export const storage = {
  getSettingValue: <TSetting extends keyof AppSettings>(
    settingKey: TSetting,
  ): AppSettings[TSetting] | undefined => {
    const { storageKey, storageGetFn } = settingsConfig[settingKey];

    const settingValue = mmkv[storageGetFn](storageKey);

    return settingValue as AppSettings[TSetting] | undefined;
  },
  setSettingValue: <TSetting extends keyof AppSettings>(
    settingKey: TSetting,
    settingValue: AppSettings[TSetting],
  ) => {
    const { storageKey } = settingsConfig[settingKey];

    mmkv.set(storageKey, settingValue);
  },
};
