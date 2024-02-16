import { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Routes } from '@/routes';
import { useColorSchemeStore, useI18nStore, useSettingsStore } from '@/stores';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoadingColorScheme, colorScheme] = useColorSchemeStore((state) => [
    state.isLoadingColorScheme,
    state.colorScheme,
  ]);

  const isLoadingLocale = useI18nStore((state) => state.isLoadingLocale);

  const isLoadingSettings = useSettingsStore(
    (state) => state.isLoadingSettings,
  );

  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    if (!isLoadingColorScheme && !isLoadingLocale && !isLoadingSettings) {
      setAppIsReady(true);
    }
  }, [isLoadingColorScheme, isLoadingLocale, isLoadingSettings]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <StatusBar
          style={colorScheme === 'dark' ? 'light' : 'dark'}
          translucent
        />

        <Routes />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
