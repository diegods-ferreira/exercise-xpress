import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { WelComeScreen } from '@/features/misc';
import { AppRoutesParams } from '@/types';

import { AppTabsNavigator } from './AppTabsNavigator';

const Stack = createNativeStackNavigator<AppRoutesParams>();

export function Routes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
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
