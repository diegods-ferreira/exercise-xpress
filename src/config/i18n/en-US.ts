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
      weight: {
        menuItemTitle: 'Weight',
        selectModal: {
          title: 'Select a measuring unit for weight',
          footerText:
            'The weight unit is used to record your exercises (e.g. weight training) and track your weight.',
        },
      },
      distance: {
        menuItemTitle: 'Distance',
        selectModal: {
          title: 'Select a measuring unit for distance',
          footerText:
            'The distance unit is used to record your exercises, such as walking, running, cycling, etc.',
        },
      },
      bodyMeasurements: {
        menuItemTitle: 'Body measurements',
        selectModal: {
          title: 'Select a measuring unit for body measurements',
          footerText:
            'The body measurement unit is used to track your body evolution.',
        },
      },
    },
    generalGroup: {
      title: 'General',
      darkTheme: 'Dark theme',
      language: {
        menuItemTitle: 'Language',
        selectModal: {
          title: 'Select a language',
          footerText:
            "When first opened, the app loads your device's language. Once changed, the language selected by the user will always be loaded.",
        },
      },
    },
  },
} as const;
