import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  DumbbellIcon,
  HomeIcon,
  LucideIcon,
  PlusIcon,
  SettingsIcon,
  User2Icon,
} from 'lucide-react-native';

import { themes } from '@/config/styles/themes';
import { useStyles } from '@/hooks';
import { AppTabsParams } from '@/types';

import { bottomTabBarStyles, tabBarButtonStyles } from './BottomTabBar.styles';

type TabButtonProps = {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  routeName: keyof AppTabsParams;
};

const tabBarItems: Record<keyof AppTabsParams, LucideIcon> = {
  Home: HomeIcon,
  Workouts: DumbbellIcon,
  Profile: User2Icon,
  Settings: SettingsIcon,
};

function TabButton({
  isFocused = false,
  onPress,
  onLongPress,
  routeName,
}: TabButtonProps) {
  const { styles, theme } = useStyles(tabBarButtonStyles({ isFocused }));

  const Icon = tabBarItems[routeName];

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Icon
          size={theme.fontSizes['2xl']}
          color={isFocused ? theme.colors.text : theme.colors.textSecondary}
        />

        {isFocused && <View style={styles.activeIndicator} />}
      </View>
    </TouchableOpacity>
  );
}

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const { styles, theme } = useStyles(bottomTabBarStyles);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = index === state.index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <React.Fragment key={route.key}>
            {index === 2 && (
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.actionButton}
              >
                <PlusIcon
                  size={theme.fontSizes['2xl']}
                  color={themes.light.colors.background}
                  strokeWidth={4}
                />
              </TouchableOpacity>
            )}

            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              routeName={route.name as keyof AppTabsParams}
            />
          </React.Fragment>
        );
      })}
    </View>
  );
}
