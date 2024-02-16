import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

interface TabBarItemProps {
  isFocused: boolean;
}

export const bottomTabBarStyles = ({
  colors,
  measures,
  roundedFull,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingBottom: edgeInsets.bottom,
      backgroundColor: colors.bgOffset,
      borderTopLeftRadius: measures['2xl'],
      borderTopRightRadius: measures['2xl'],
      overflow: 'hidden',

      flexDirection: 'row',
      alignItems: 'center',

      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
    actionButton: {
      backgroundColor: colors.primary,
      borderRadius: roundedFull,
      margin: measures.xs,
      height: '90%',
      aspectRatio: '1 / 1',

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export const tabBarButtonStyles = ({ isFocused }: TabBarItemProps) => {
  return ({ colors, measures, fontSizes }: StylesFunctionParams) => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: measures.xl,
        paddingHorizontal: 0,

        flexDirection: 'column',
      },
      menuName: {
        fontSize: fontSizes.xxs,
        color: isFocused ? colors.primary : colors.textSecondary,
        fontWeight: isFocused ? 'bold' : '300',
      },
    });
  };
};
