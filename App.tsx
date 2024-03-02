import { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Routes } from '@/routes';
import { useColorSchemeStore } from '@/stores';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <BottomSheetModalProvider>
          <StatusBar
            style={colorScheme === 'dark' ? 'light' : 'dark'}
            translucent
          />

          <Routes />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
