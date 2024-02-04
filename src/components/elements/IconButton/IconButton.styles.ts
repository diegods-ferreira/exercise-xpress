import { StyleSheet, ViewStyle } from 'react-native';

import { StylesFunctionParams } from '@/types';

export type IconButtonStylesProps = {
  isDisabled?: boolean;
};

export const iconButtonStyles = ({ isDisabled }: IconButtonStylesProps) => {
  return ({ colors, measures, roundedFull }: StylesFunctionParams) => {
    const opacity: ViewStyle['opacity'] = isDisabled ? 0.75 : 1;

    return StyleSheet.create({
      container: {
        padding: measures.md,
        backgroundColor: colors.bgOffset,
        borderRadius: roundedFull,
        opacity,
      },
    });
  };
};
