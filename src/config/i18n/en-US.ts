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
      },
      distance: {
        meters: {
          symbol: 'm',
          singular: 'Meter',
          plural: 'Meters',
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
    },
    generalGroup: {
      title: 'General',
      darkTheme: 'Dark theme',
      language: 'Language',
    },
  },
} as const;
