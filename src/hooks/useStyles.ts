import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { StylesObject, StylesFunctionParams } from '@/types';

type UseStylesReturn<TStylesObject> = {
  styles: StylesObject<TStylesObject>;
  colorScheme: 'light' | 'dark';
  theme: typeof themes.light;
};

export function useStyles<TStylesObject>(
  stylesFunction: (param: StylesFunctionParams) => TStylesObject,
): UseStylesReturn<TStylesObject> {
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);
  const insets = useSafeAreaInsets();
  const theme = themes[colorScheme];

  const styles = useMemo(() => {
    const stylesObject = stylesFunction({
      edgeInsets: insets,
      ...theme,
    });

    return stylesObject;
  }, [insets, stylesFunction, theme]);

  return { styles, colorScheme, theme };
}
