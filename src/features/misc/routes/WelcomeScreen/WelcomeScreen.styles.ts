import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const welcomeScreenStyles = ({
  colors,
  measures,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    backgroundImage: {
      flex: 1,
    },

    backgroundImageMask: {
      flex: 1,
      paddingTop: edgeInsets.top + measures.lg,
      paddingHorizontal: measures.lg,
      alignItems: 'center',
      gap: measures.lg,
    },

    logoWrapper: {
      width: '100%',
      borderRadius: measures.lg,
      overflow: 'hidden',
    },

    logo: {
      width: '100%',
      height: measures['4xl'] * 2,
    },

    welcomeContainer: {
      marginTop: measures.xl * -1,
      paddingBottom: edgeInsets.bottom + measures.lg,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomWidth: 0,
      gap: measures.xl,
    },

    privacyPolicyLinkWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: measures.xs,
    },

    toggleThemeButton: {
      alignSelf: 'flex-end',
    },
  });
};
