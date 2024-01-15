import { I18nTexts } from '@/types';

export const pt: I18nTexts = {
  global: {
    privacyPolicy: 'Política de Privacidade',
    measuringUnits: {
      weight: {
        kilogram: {
          symbol: 'kg',
          singular: 'Quilograma',
          plural: 'Quilogramas',
        },
      },
      distance: {
        meters: {
          symbol: 'm',
          singular: 'Metro',
          plural: 'Metros',
        },
      },
      bodyMeasurements: {
        centimeters: {
          symbol: 'cm',
          singular: 'Centímetro',
          plural: 'Centímetros',
        },
        inches: {
          symbol: 'in',
          singular: 'Polegada',
          plural: 'Polegadas',
        },
      },
    },
  },
  landingPage: {
    title: 'Comece um Estilo de Vida Saudável',
    subtitle:
      'Conquiste seus objetivos e o melhor estilo de vida com Excerise Xpress',
    actionButton: 'Vamos começar',
    accessPrivacyPolicy: 'Acesse nossa',
  },
  settingsPage: {
    title: 'Ajustes',
    measuringUnitsGroup: {
      title: 'Unidades de medida',
      weight: 'Peso',
      distance: 'Distância',
      bodyMeasurements: 'Medidas corporais',
    },
    generalGroup: {
      title: 'Geral',
      darkTheme: 'Tema escuro',
      language: 'Idioma',
    },
  },
} as const;
