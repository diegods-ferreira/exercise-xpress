import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const settingsScreenStyles = ({
  colors,
  measures,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: edgeInsets.top + measures['2xl'],
      paddingHorizontal: measures.xl,
      gap: measures['2xl'],
    },

    settingsGroupContainer: {
      gap: measures.sm,
    },

    settingsGroupTitle: {
      marginLeft: measures.xl,
    },

    logo: {
      width: '100%',
      height: measures['5xl'],
      marginTop: 'auto',
      marginBottom: edgeInsets.bottom + measures['5xl'] * 2,
      opacity: 0.25,
    },
  });
};
