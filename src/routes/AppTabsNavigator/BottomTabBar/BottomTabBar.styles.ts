import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

interface TabBarItemProps {
  isFocused: boolean;
}

export const bottomTabBarStyles = ({
  colors,
  measures,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: measures.xs,
      paddingBottom: edgeInsets.bottom + measures.xs,
      paddingHorizontal: measures.xs,
      backgroundColor: colors.bgOffset,
      borderTopLeftRadius: measures.xl,
      borderTopRightRadius: measures.xl,
      overflow: 'hidden',

      flexDirection: 'row',
      alignItems: 'center',
      gap: measures.xs,

      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
    actionButton: {
      backgroundColor: colors.primary,
      borderRadius: measures.xl,
      margin: measures.xs,
      height: measures['5xl'],
      aspectRatio: '1 / 1',

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export const tabBarButtonStyles = ({ isFocused }: TabBarItemProps) => {
  return ({
    colors,
    measures,
    roundedFull,
    fontSizes,
  }: StylesFunctionParams) => {
    return StyleSheet.create({
      container: {
        flex: 1,
        height: measures['5xl'],
        backgroundColor: 'transparent',

        flexDirection: 'column',
      },

      innerContainer: {
        height: '100%',
        backgroundColor: isFocused ? colors.background : 'transparent',
        borderRadius: measures.lg,
        position: 'relative',

        alignItems: 'center',
        justifyContent: 'center',
      },

      menuName: {
        fontSize: fontSizes.xxs,
        color: isFocused ? colors.text : colors.textSecondary,
        fontWeight: isFocused ? 'bold' : '300',
      },

      activeIndicator: {
        width: measures.lg,
        height: measures.xs,
        backgroundColor: colors.primary,
        borderRadius: roundedFull,

        position: 'absolute',
        bottom: 0,
      },
    });
  };
};
