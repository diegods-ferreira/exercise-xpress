import { boxShadowStyles } from './box-shadow';
import { fontSizes } from './font-sizes';

export const themes = {
  light: {
    colors: {
      primary: '#aad729',

      background: '#f3f4f6',
      bgOffset: '#fcfcfc',

      text: '#242424',
      textSecondary: '#3a3a3a',
    },
    boxShadow: boxShadowStyles,
    fontSizes,
  },
  dark: {
    colors: {
      primary: '#aad729',

      background: '#242424',
      bgOffset: '#3a3a3a',

      text: '#fcfcfc',
      textSecondary: '#9b9b9b',
    },
    boxShadow: boxShadowStyles,
    fontSizes,
  },
};
