import { EXERCISES_LIST_EN } from './exercises-list-EN';
import { EXERCISES_LIST_PT_BR } from './exercises-list-PT_BR';

export const EXERCISES_LIST = {
  en_US: EXERCISES_LIST_EN,
  pt_BR: EXERCISES_LIST_PT_BR,
} as const;

export * from './workouts';
