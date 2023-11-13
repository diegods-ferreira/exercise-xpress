import { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { themes } from '@/config/styles/themes';
import { Routes } from '@/routes';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { useI18nStore } from '@/stores/i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoadingColorScheme, colorScheme] = useColorSchemeStore((state) => [
    state.isLoadingColorScheme,
    state.colorScheme,
  ]);

  const isLoadingLocale = useI18nStore((state) => state.isLoadingLocale);

  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    if (!isLoadingColorScheme && !isLoadingLocale) {
      setAppIsReady(true);
    }
  }, [isLoadingColorScheme, isLoadingLocale]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <ThemeProvider theme={themes[colorScheme]}>
          <StatusBar
            style={colorScheme === 'dark' ? 'light' : 'dark'}
            translucent
          />

          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
