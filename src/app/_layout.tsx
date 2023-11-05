import { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import { themes } from '@/config/styles/themes';
import { useColorSchemeStore } from '@/stores/color-scheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoadingColorScheme, colorScheme] = useColorSchemeStore((state) => [
    state.isLoadingColorScheme,
    state.colorScheme,
  ]);

  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    if (!isLoadingColorScheme) {
      setAppIsReady(true);
    }
  }, [isLoadingColorScheme]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider theme={themes[colorScheme]}>
        <Stack
          screenOptions={{
            animation: 'slide_from_right',
            headerShown: false,
            statusBarStyle: colorScheme === 'dark' ? 'light' : 'dark',
            statusBarColor: themes[colorScheme].colors.background,
            statusBarTranslucent: true,
          }}
        />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
