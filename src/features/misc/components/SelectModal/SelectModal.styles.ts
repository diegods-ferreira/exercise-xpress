import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const selectModalStyles = ({
  colors,
  measures,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      backgroundColor: colors.bgOffset,
      paddingTop: edgeInsets.top + measures.lg,
      paddingBottom: measures.lg,
      paddingHorizontal: measures.xl,
      overflow: 'visible',

      flexDirection: 'row',
      alignItems: 'center',
    },

    headerSlotLeft: {
      flex: 1,
      alignItems: 'flex-start',
    },

    headerSlotRight: {
      flex: 1,
      alignItems: 'flex-end',
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
