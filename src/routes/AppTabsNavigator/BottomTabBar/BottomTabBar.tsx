import { RFValue } from 'react-native-responsive-fontsize';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { HomeIcon, LucideIcon, SettingsIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

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

  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  return (
    <S.Container intensity={100} tint={colorScheme} style={theme.boxShadow}>
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
          <TabButton
            key={route.key}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={route.name as keyof AppTabsParams}
          />
        );
      })}
    </S.Container>
  );
}
