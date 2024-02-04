import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import {
  HomeIcon,
  LucideIcon,
  PlusIcon,
  SettingsIcon,
} from 'lucide-react-native';

import { ButtonBase } from '@/components/elements';
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

type TabBarItem = {
  label: string;
  icon: LucideIcon;
};

const tabBarItems: Record<keyof AppTabsParams, TabBarItem> = {
  Home: {
    label: 'Início',
    icon: HomeIcon,
  },
  Settings: {
    label: 'Ajustes',
    icon: SettingsIcon,
  },
};

function TabButton({
  isFocused = false,
  onPress,
  onLongPress,
  routeName,
}: TabButtonProps) {
  const { styles, theme } = useStyles(tabBarButtonStyles({ isFocused }));

  const { label, icon: Icon } = tabBarItems[routeName];

  return (
    <ButtonBase
      variant="secondary"
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon
        size={theme.fontSizes['2xl']}
        color={isFocused ? theme.colors.primary : theme.colors.textSecondary}
      />

      <Text style={styles.menuName}>{label}</Text>
    </ButtonBase>
  );
}

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const { styles, theme, colorScheme } = useStyles(bottomTabBarStyles);

  return (
    <BlurView intensity={100} tint={colorScheme} style={styles.container}>
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
            {index === 1 && (
              <TouchableOpacity activeOpacity={0.5} style={styles.actionButton}>
                <PlusIcon
                  size={theme.fontSizes['2xl']}
                  color={themes.dark.colors.background}
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
    </BlurView>
  );
}
