import { Locale } from '@/config/i18n';
import { Exercise } from '@/types';

import { EXERCISES_LIST_EN } from './exercises-list-EN';
import { EXERCISES_LIST_PT_BR } from './exercises-list-PT_BR';

type ExerciseList = Array<
  Omit<Exercise, 'name' | 'instructions'> & {
    name: Record<Locale, string>;
    instructions: Record<Locale, string[]>;
  }
>;

export const EXERCISES_LIST: ExerciseList = EXERCISES_LIST_EN.map(
  (exercise, index) => ({
    ...exercise,
    name: {
      en_US: exercise.name,
      pt_BR: EXERCISES_LIST_PT_BR[index].name,
    },
    instructions: {
      en_US: exercise.instructions,
      pt_BR: EXERCISES_LIST_PT_BR[index].instructions,
    },
  }),
);
