import { I18nTexts } from '@/types';

export const en: I18nTexts = {
  global: {
    privacyPolicy: 'Privacy Policy',
    measuringUnits: {
      weight: {
        kilogram: {
          symbol: 'kg',
          singular: 'Kilogram',
          plural: 'Kilograms',
        },
        pound: {
          symbol: 'lb',
          singular: 'Pound',
          plural: 'Pounds',
        },
      },
      distance: {
        meters: {
          symbol: 'm',
          singular: 'Meter',
          plural: 'Meters',
        },
        miles: {
          symbol: 'mi.',
          singular: 'Mile',
          plural: 'Miles',
        },
      },
      bodyMeasurements: {
        centimeters: {
          symbol: 'cm',
          singular: 'Centimeter',
          plural: 'Centimeters',
        },
        inches: {
          symbol: 'in',
          singular: 'Inch',
          plural: 'Inches',
        },
      },
    },
  },
  landingPage: {
    title: "Let's Start a Healthy Life Style",
    subtitle: 'Achieve your best lifestyle and goals with Exercise Xpress',
    actionButton: 'Get Started',
    accessPrivacyPolicy: 'Access our',
  },
  settingsPage: {
    title: 'Settings',
    measuringUnitsGroup: {
      title: 'Measuring units',
      weight: 'Weight',
      distance: 'Distance',
      bodyMeasurements: 'Body measurements',
    },
    generalGroup: {
      title: 'General',
      darkTheme: 'Dark theme',
      language: 'Language',
    },
  },
} as const;
