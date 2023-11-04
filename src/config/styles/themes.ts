import { borderRadius } from './border-radius';
import { boxShadowStyles } from './box-shadow';
import { fontSizes } from './font-sizes';

export const themes = {
  light: {
    colors: {
      primary: '#aad729',

      background: '#f5f5f5',
      bgOffset: '#ffffff',

      text: '#242424',
      textSecondary: '#3a3a3a',

      ripple: 'rgba(0, 0, 0, 0.1)',
    },
    boxShadow: boxShadowStyles,
    fontSizes,
    borderRadius,
  },
  dark: {
    colors: {
      primary: '#aad729',

      background: '#242424',
      bgOffset: '#3a3a3a',

      text: '#fcfcfc',
      textSecondary: '#9b9b9b',

      ripple: 'rgba(255, 255, 255, 0.1)',
    },
    boxShadow: {} as typeof boxShadowStyles,
    fontSizes,
    borderRadius,
  },
};
