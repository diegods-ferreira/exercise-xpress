export type ColorScheme = 'light' | 'dark';
export type Locale = 'en_US' | 'pt_BR' | 'es_ES';
export type Weight = 'kilogram' | 'pound';
export type Distance = 'meters' | 'miles';
export type BodyMeasurements = 'centimeters' | 'inches';

export type AppSettings = {
  showWelcomeScreen?: boolean;
  colorScheme: ColorScheme;
  locale: Locale;
  weight: Weight;
  distance: Distance;
  bodyMeasurements: BodyMeasurements;
};
