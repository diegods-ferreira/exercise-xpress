import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';

import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';

import { useStyles } from '@/hooks';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export function BottomSheetModalBlurBackdrop({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) {
  const { colorScheme } = useStyles();

  const animatedProps = useAnimatedProps(() => {
    const intensity = interpolate(
      animatedIndex.value,
      [-1, 1],
      [0, 10],
      Extrapolate.CLAMP,
    );

    return {
      intensity,
    };
  });

  return (
    <AnimatedBlurView
      style={style}
      animatedProps={animatedProps}
      tint={colorScheme === 'dark' ? 'light' : 'dark'}
    />
  );
}
