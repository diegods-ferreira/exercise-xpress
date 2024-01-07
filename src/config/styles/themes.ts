import { RFValue } from 'react-native-responsive-fontsize';

import { fontSizes } from './font-sizes';

const generalMeasurements = {
  xs: RFValue(4),
  sm: RFValue(6),
  md: RFValue(8),
  lg: RFValue(12),
  xl: RFValue(16),
  '2xl': RFValue(24),
};

const generalStyles = {
  fontSizes,
  measures: generalMeasurements,
  roundedFull: RFValue(99999),
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
