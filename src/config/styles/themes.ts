import { fontSizes } from './font-sizes';

const generalMeasurements = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
  '5xl': 56,
};

const generalStyles = {
  fontSizes,
  measures: generalMeasurements,
  roundedFull: 99999,
};

export const themes = {
  light: {
    colors: {
      primary: '#aad729',

      background: '#f5f5f5',
      bgOffset: '#ffffff',

      text: '#262626',
      textSecondary: '#737373',

      ripple: 'rgba(0, 0, 0, 0.1)',
    },
    ...generalStyles,
  },
  dark: {
    colors: {
      primary: '#aad729',

      background: '#171717',
      bgOffset: '#262626',

      text: '#fcfcfc',
      textSecondary: '#a3a3a3',

      ripple: 'rgba(255, 255, 255, 0.1)',
    },
    ...generalStyles,
  },
};
