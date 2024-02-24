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
    workouts: {
      exercises: {
        force: {
          pull: 'Puxar',
          push: 'Empurrar',
          static: 'Estático',
        },
        level: {
          beginner: 'Iniciante',
          intermediate: 'Intermediário',
          expert: 'Avançado',
        },
        mechanic: {
          isolation: 'Isolado',
          compound: 'Composto',
        },
        equipment: {
          'body only': 'Somente corpo',
          'e-z curl bar': 'Barra W',
          'exercise ball': 'Bola de exercício',
          'foam roll': 'Foam Roller',
          'medicine ball': 'Medicine Ball',
          bands: 'Faixas',
          barbell: 'Barra',
          cable: 'Cabo',
          dumbbell: 'Haltere',
          kettlebells: 'Kettlebells',
          machine: 'Máquina',
          other: 'Outro',
        },
        category: {
          'olympic weightlifting': 'Levantamento de Peso Olímpico',
          cardio: 'Cardiovascular',
          plyometrics: 'Pliométrico',
          powerlifting: 'Levantamento de Peso',
          strength: 'Força',
          stretching: 'Alongamento',
          strongman: 'Atletismo de Força',
        },
        muscle: {
          'lower back': 'Lombar',
          'middle back': 'Meio das costas',
          abdominals: 'Abdômen',
          abductors: 'Abdutores',
          adductors: 'Adutores',
          biceps: 'Bíceps',
          calves: 'Panturrilhas',
          chest: 'Peito',
          forearms: 'Antebraços',
          glutes: 'Glúteos',
          hamstrings: 'Isquiotibiais',
          lats: 'Dorsal',
          neck: 'Pescoço',
          quadriceps: 'Quadríceps',
          shoulders: 'Ombros',
          traps: 'Trapézio',
          triceps: 'Tríceps',
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
      weight: {
        menuItemTitle: 'Peso',
        selectModal: {
          title: 'Selecione a unidade de medida de peso',
          footerText:
            'A unidade de peso é usada para registros de seus exercícios (ex: musculação) e rastreio do seu peso.',
        },
      },
      distance: {
        menuItemTitle: 'Distância',
        selectModal: {
          title: 'Selecione a unidade de medida de distância',
          footerText:
            'A unidade de distância é usada para registros de seus exercícios, tais como caminhada, corrida, bicicleta, etc.',
        },
      },
      bodyMeasurements: {
        menuItemTitle: 'Medidas corporais',
        selectModal: {
          title: 'Selecione a unidade de medidas corporais',
          footerText:
            'A unidade de medidas corporais é usada para rastreio de sua evolução corporal.',
        },
      },
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
