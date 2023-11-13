import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeIcon, LucideIcon, SettingsIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { HomeScreen, SettingsScreen } from '@/features/misc';
import { AppTabsParams } from '@/types';

const Tab = createBottomTabNavigator<AppTabsParams>();

const renderTabIcon = (LIcon: LucideIcon) =>
  function Icon({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) {
    return <LIcon size={size} color={color} />;
  };

const renderTabButton = (props: BottomTabBarButtonProps) => {
  return <TouchableOpacity activeOpacity={0.5} {...props} />;
};

export function AppTabsNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarButton: renderTabButton,
        tabBarStyle: {
          height: RFValue(56),
          borderColor: theme.colors.background,
        },
        tabBarItemStyle: {
          paddingBottom: RFValue(12),
          backgroundColor: theme.colors.background,
          gap: RFValue(0),
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: renderTabIcon(HomeIcon),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: renderTabIcon(SettingsIcon),
        }}
      />
    </Tab.Navigator>
  );
}
