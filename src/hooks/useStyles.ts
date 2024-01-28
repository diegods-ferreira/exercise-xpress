import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { StylesObject, StylesFunctionParams } from '@/types';

export function useStyles<TStylesObject>(
  stylesFunction: (param: StylesFunctionParams) => TStylesObject,
): StylesObject<TStylesObject> {
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => {
    const stylesObject = stylesFunction({
      edgeInsets: insets,
      ...themes[colorScheme],
    });

    return stylesObject;
  }, [colorScheme, insets, stylesFunction]);

  return styles;
}
