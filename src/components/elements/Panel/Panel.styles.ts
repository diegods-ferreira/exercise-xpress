import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const panelStyles = ({ colors, measures }: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      padding: measures.xl,
      backgroundColor: colors.bgOffset,
      borderRadius: measures.lg,
    },
  });
};
