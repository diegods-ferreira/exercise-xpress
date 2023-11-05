import { Alert } from 'react-native';

import { create } from 'zustand';

import { storage } from '@/utils/storage';

type ColorSchemeStoreData = {
  colorScheme: 'light' | 'dark';
  isLoadingColorScheme: boolean;
  toggleColorScheme: () => Promise<void>;
};

export const useColorSchemeStore = create<ColorSchemeStoreData>()(
  (set, get) => ({
    colorScheme: 'dark',
    isLoadingColorScheme: true,
    toggleColorScheme: async () => {
      const colorScheme = get().colorScheme;
      const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';

      await storage.setColorScheme(newColorScheme);

      set(() => ({ colorScheme: newColorScheme }));
    },
  }),
);

storage
  .getColorScheme()
  .then((colorScheme) => useColorSchemeStore.setState({ colorScheme }))
  .catch((err) => {
    console.log(JSON.stringify(err), null, 2);

    Alert.alert(
      'Erro',
      'Ocorreu um erro ao recuperar ao carregar o tema escolhido.',
    );
  })
  .finally(() => useColorSchemeStore.setState({ isLoadingColorScheme: false }));
