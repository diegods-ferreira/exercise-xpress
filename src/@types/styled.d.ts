import 'styled-components/native';
import { themes } from '@/config/styles/themes';

declare module 'styled-components/native' {
  type ThemeType = typeof themes.dark;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
