import { create } from 'zustand';

import { storage } from '@/lib/react-native-mmkv';
import { ColorScheme } from '@/types';

type ColorSchemeStoreData = {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
};

export const useColorSchemeStore = create<ColorSchemeStoreData>()(
  (set, get) => ({
    colorScheme: storage.getColorScheme(),
    toggleColorScheme: () => {
      const colorScheme = get().colorScheme;
      const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';

      storage.setColorScheme(newColorScheme);

      set(() => ({ colorScheme: newColorScheme }));
    },
  }),
);
