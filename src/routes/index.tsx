import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelComeScreen } from '@/features/misc';
import { useStyles } from '@/hooks';
import { useSettingsStore } from '@/stores/settings';
import { AppRoutesParams } from '@/types';

import { AppTabsNavigator } from './AppTabsNavigator';

const Stack = createNativeStackNavigator<AppRoutesParams>();

export function Routes() {
  const { theme } = useStyles();

  const showWelcomeScreen = useSettingsStore(
    (state) => state.showWelcomeScreen,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showWelcomeScreen ? 'Welcome' : 'HomeTabNavigator'}
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="Welcome" component={WelComeScreen} />
        <Stack.Screen name="HomeTabNavigator" component={AppTabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
