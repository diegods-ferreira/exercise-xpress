import { useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { StylesFunctionParams } from '@/types';

type UseStylesReturn<TStylesObject> = {
  styles: TStylesObject;
  colorScheme: 'light' | 'dark';
  theme: typeof themes.light;
  edgeInsets: EdgeInsets;
};

export function useStyles<TStylesObject>(
  stylesFunction?: (param: StylesFunctionParams) => TStylesObject,
): UseStylesReturn<TStylesObject> {
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);
  const edgeInsets = useSafeAreaInsets();
  const theme = themes[colorScheme];

  const styles = useMemo(() => {
    if (!stylesFunction) {
      return null;
    }

    return stylesFunction({ edgeInsets, ...theme });
  }, [edgeInsets, stylesFunction, theme]);

  return { styles, colorScheme, theme, edgeInsets };
}
