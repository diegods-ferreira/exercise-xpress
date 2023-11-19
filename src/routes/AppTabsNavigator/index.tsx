import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, SettingsScreen } from '@/features/misc';
import { AppTabsParams } from '@/types';

import { BottomTabBar } from './BottomTabBar/BottomTabBar';

const Tab = createBottomTabNavigator<AppTabsParams>();

export function AppTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
