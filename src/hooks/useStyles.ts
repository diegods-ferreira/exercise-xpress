import { useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { themes } from '@/config/styles/themes';
import { useSettingsStore } from '@/stores';
import { ColorScheme, StylesFunctionParams } from '@/types';

type UseStylesReturn<TStylesObject> = {
  styles: TStylesObject;
  colorScheme: ColorScheme;
  theme: typeof themes.light;
  edgeInsets: EdgeInsets;
};

export function useStyles<TStylesObject>(
  stylesFunction?: (param: StylesFunctionParams) => TStylesObject,
): UseStylesReturn<TStylesObject> {
  const colorScheme = useSettingsStore((state) => state.colorScheme);
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
