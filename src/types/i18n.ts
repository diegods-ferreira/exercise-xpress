import { AppSettings } from './settings';
import {
  ExerciseCategory,
  ExerciseEquipment,
  ExerciseForce,
  ExerciseLevel,
  ExerciseMechanic,
  ExerciseMuscle,
} from './workouts';

type FlattenKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`
    : FlattenKeys<
        T[K],
        `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`
      >;
}[keyof T];

export type I18nTexts = {
  global: {
    privacyPolicy: string;
    measuringUnits: {
      weight: Record<
        AppSettings['weight'],
        Record<'symbol' | 'singular' | 'plural', string>
      >;
      distance: Record<
        AppSettings['distance'],
        Record<'symbol' | 'singular' | 'plural', string>
      >;
      bodyMeasurements: Record<
        AppSettings['bodyMeasurements'],
        Record<'symbol' | 'singular' | 'plural', string>
      >;
    };
    workouts: {
      exercises: {
        force: Record<ExerciseForce, string>;
        level: Record<ExerciseLevel, string>;
        mechanic: Record<ExerciseMechanic, string>;
        equipment: Record<ExerciseEquipment, string>;
        category: Record<ExerciseCategory, string>;
        muscle: Record<ExerciseMuscle, string>;
      };
    };
  };
  landingPage: {
    title: string;
    subtitle: string;
    actionButton: string;
    accessPrivacyPolicy: string;
  };
  settingsPage: {
    title: string;
    measuringUnitsGroup: {
      title: string;
      weight: {
        menuItemTitle: string;
        selectModal: {
          title: string;
          footerText: string;
        };
      };
      distance: {
        menuItemTitle: string;
        selectModal: {
          title: string;
          footerText: string;
        };
      };
      bodyMeasurements: {
        menuItemTitle: string;
        selectModal: {
          title: string;
          footerText: string;
        };
      };
    };
    generalGroup: {
      title: string;
      darkTheme: string;
      language: {
        menuItemTitle: string;
        selectModal: {
          title: string;
          footerText: string;
        };
      };
    };
  };
};

export type I18nTextsKeys = FlattenKeys<I18nTexts>;
