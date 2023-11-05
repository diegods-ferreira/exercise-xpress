import AsyncStorage from '@react-native-async-storage/async-storage';

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
};
