import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  LucideIcon,
  PlusIcon,
  SettingsIcon,
} from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { themes } from '@/config/styles/themes';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { AppTabsParams } from '@/types';

import * as S from './BottomTabBar.styles';

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
  const theme = useTheme();

  const { label, icon: Icon } = tabBarItems[routeName];

  return (
    <S.Button
      onPress={onPress}
      onLongPress={onLongPress}
      rippleColor={theme.colors.ripple}
      underlayColor={theme.colors.textSecondary}
    >
      <Icon
        size={RFValue(20)}
        color={isFocused ? theme.colors.primary : theme.colors.textSecondary}
      />

      <S.MenuName isFocused={isFocused}>{label}</S.MenuName>
    </S.Button>
  );
}

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  return (
    <S.Container
      intensity={100}
      tint={colorScheme}
      style={{ paddingBottom: insets.bottom }}
    >
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
              <S.ActionButton activeOpacity={0.5}>
                <PlusIcon
                  size={theme.fontSizes['2xl']}
                  color={themes.dark.colors.background}
                />
              </S.ActionButton>
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
    </S.Container>
  );
}
