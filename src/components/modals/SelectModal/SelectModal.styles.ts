import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const selectModalStyles = ({
  colors,
  measures,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      backgroundColor: colors.bgOffset,
      paddingVertical: measures.lg,
      paddingHorizontal: measures.xl,
      borderBottomWidth: 1,
      borderBottomColor: colors.ripple,
      overflow: 'visible',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    menuList: {
      margin: measures.xl,
    },

    footerText: {
      marginVertical: 0,
      paddingHorizontal: measures.xl,
    },
  });
};
