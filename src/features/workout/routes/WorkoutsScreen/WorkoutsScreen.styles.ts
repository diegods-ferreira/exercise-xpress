import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const workoutsScreenStyles = ({
  colors,
  measures,
  edgeInsets,
}: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: edgeInsets.top + measures['2xl'],
      paddingBottom: edgeInsets.bottom + measures['3xl'] * 3,
      paddingHorizontal: measures.xl,
      gap: measures['2xl'],
    },

    emptyFeedbackWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: measures['2xl'],
    },

    emptyFeedbackImage: {
      width: '100%',
      aspectRatio: '1 / 1',
    },

    emptyFeedbackText: {
      textAlign: 'center',
    },
  });
};
