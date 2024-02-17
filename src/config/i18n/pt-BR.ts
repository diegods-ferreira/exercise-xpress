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
        pound: {
          symbol: 'lb',
          singular: 'Libra',
          plural: 'Libras',
        },
      },
      distance: {
        meters: {
          symbol: 'm',
          singular: 'Metro',
          plural: 'Metros',
        },
        miles: {
          symbol: 'mi.',
          singular: 'Milha',
          plural: 'Milhas',
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
      language: {
        menuItemTitle: 'Idioma',
        selectModal: {
          title: 'Selecione um idioma',
          footerText:
            'Quando aberto pela primeira vez, o aplicativo carrega o idioma do seu dispositivo. Uma vez alterado, sempre será carregado o idioma selecionado pelo usuário.',
        },
      },
    },
  },
} as const;
