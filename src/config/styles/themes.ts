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
} as const;

const generalStyles = {
  fontSizes,
  measures: generalMeasurements,
  roundedFull: 99999,
} as const;

export const themes = {
  light: {
    colors: {
      primary: '#ff8137',
      secondary: '#246cd0',

      background: '#f3f3f5',
      bgOffset: '#ffffff',

      text: '#262626',
      textSecondary: '#737373',

      ripple: 'rgba(0, 0, 0, 0.1)',
    },
    ...generalStyles,
  },
  dark: {
    colors: {
      primary: '#ff8137',
      secondary: '#246cd0',

      background: '#111214',
      bgOffset: '#25262b',

      text: '#ffffff',
      textSecondary: '#9fa0a7',

      ripple: 'rgba(255, 255, 255, 0.1)',
    },
    ...generalStyles,
  },
};
