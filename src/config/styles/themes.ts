import { RFValue } from 'react-native-responsive-fontsize';

import { boxShadowStyles } from './box-shadow';
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

      background: '#e5e5e5',
      bgOffset: '#ffffff',
      bgOffsetDarker: '#f5f5f5',

      text: '#242424',
      textSecondary: '#3a3a3a',

      ripple: 'rgba(0, 0, 0, 0.1)',
    },
    boxShadow: boxShadowStyles,
    ...generalStyles,
  },
  dark: {
    colors: {
      primary: '#aad729',

      background: '#242424',
      bgOffset: '#3a3a3a',
      bgOffsetDarker: '#2a2a2a',

      text: '#fcfcfc',
      textSecondary: '#9b9b9b',

      ripple: 'rgba(255, 255, 255, 0.1)',
    },
    boxShadow: {} as typeof boxShadowStyles,
    ...generalStyles,
  },
};
