import { I18nTexts } from '@/types';

export const es: I18nTexts = {
  global: {
    privacyPolicy: 'Política de privacidad',
    measuringUnits: {
      weight: {
        kilogram: {
          symbol: 'kg',
          singular: 'Kilogramo',
          plural: 'Kilogramos',
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
          singular: 'Milla',
          plural: 'Millas',
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
          singular: 'Pulgada',
          plural: 'Pulgadas',
        },
      },
    },
    workouts: {
      exercises: {
        force: {
          pull: 'Tirón',
          push: 'Empujón',
          static: 'Estático',
        },
        level: {
          beginner: 'Principiante',
          intermediate: 'Intermedio',
          expert: 'Experto',
        },
        mechanic: {
          isolation: 'Aislamiento',
          compound: 'Compuesto',
        },
        equipment: {
          'body only': 'Solo cuerpo',
          'e-z curl bar': 'Barra de curl e-z',
          'exercise ball': 'Pelota de ejercicio',
          'foam roll': 'Rodillo de espuma',
          'medicine ball': 'Pelota medicinal',
          bands: 'Bandas',
          barbell: 'Barra',
          cable: 'Cable',
          dumbbell: 'Mancuerna',
          kettlebells: 'Pesas rusas',
          machine: 'Máquina',
          other: 'Otro',
        },
        category: {
          'olympic weightlifting': 'Levantamiento de pesas olímpico',
          cardio: 'Cardio',
          plyometrics: 'Pliometría',
          powerlifting: 'Levantamiento de potencia',
          strength: 'Fuerza',
          stretching: 'Estiramiento',
          strongman: 'Hombre fuerte',
        },
        muscle: {
          'lower back': 'Espalda baja',
          'middle back': 'Espalda media',
          abdominals: 'Abdominales',
          abductors: 'Abductores',
          adductors: 'Aductores',
          biceps: 'Bíceps',
          calves: 'Pantorrillas',
          chest: 'Pecho',
          forearms: 'Antebrazos',
          glutes: 'Glúteos',
          hamstrings: 'Isquiotibiales',
          lats: 'Dorsales',
          neck: 'Cuello',
          quadriceps: 'Cuádriceps',
          shoulders: 'Hombros',
          traps: 'Trapecios',
          triceps: 'Tríceps',
        },
      },
    },
  },
  landingPage: {
    title: 'Comencemos un estilo de vida saludable',
    subtitle: 'Alcanza tu mejor estilo de vida y objetivos con Exercise Xpress',
    actionButton: 'Empezar',
    accessPrivacyPolicy: 'Accede a nuestra',
  },
  settingsPage: {
    title: 'Configuración',
    measuringUnitsGroup: {
      title: 'Unidades de medida',
      weight: {
        menuItemTitle: 'Peso',
        selectModal: {
          title: 'Selecciona una unidad de medida para peso',
          footerText:
            'La unidad de peso se usa para registrar tus ejercicios (por ejemplo, entrenamiento con pesas) y seguir tu peso.',
        },
      },
      distance: {
        menuItemTitle: 'Distancia',
        selectModal: {
          title: 'Selecciona una unidad de medida para distancia',
          footerText:
            'La unidad de distancia se usa para registrar tus ejercicios, como caminar, correr, andar en bicicleta, etc.',
        },
      },
      bodyMeasurements: {
        menuItemTitle: 'Medidas corporales',
        selectModal: {
          title: 'Selecciona una unidad de medida para medidas corporales',
          footerText:
            'La unidad de medida corporal se usa para seguir la evolución de tu cuerpo.',
        },
      },
    },
    generalGroup: {
      title: 'General',
      darkTheme: 'Tema oscuro',
      language: {
        menuItemTitle: 'Idioma',
        selectModal: {
          title: 'Selecciona un idioma',
          footerText:
            'Al abrirlo por primera vez, la aplicación carga el idioma de tu dispositivo. Una vez cambiado, el idioma seleccionado por el usuario siempre se cargará.',
        },
      },
    },
  },
} as const;
