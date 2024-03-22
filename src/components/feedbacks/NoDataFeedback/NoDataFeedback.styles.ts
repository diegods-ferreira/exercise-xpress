import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const noDataFeedbackStyles = ({ measures }: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: measures['2xl'],
    },

    image: {
      width: '100%',
      aspectRatio: '1 / 1',
    },

    text: {
      textAlign: 'center',
    },
  });
};
