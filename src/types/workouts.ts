import {
  EXERCISE_CATEGORIES,
  EXERCISE_EQUIPMENTS,
  EXERCISE_FORCES,
  EXERCISE_LEVELS,
  EXERCISE_MECHANICS,
  EXERCISE_MUSCLES,
} from '@/config/constants';

export type ExerciseForce = (typeof EXERCISE_FORCES)[number];
export type ExerciseLevel = (typeof EXERCISE_LEVELS)[number];
export type ExerciseMechanic = (typeof EXERCISE_MECHANICS)[number];
export type ExerciseCategory = (typeof EXERCISE_CATEGORIES)[number];
export type ExerciseEquipment = (typeof EXERCISE_EQUIPMENTS)[number];
export type ExerciseMuscle = (typeof EXERCISE_MUSCLES)[number];

export type Exercise = {
  id: string;
  name: string;
  instructions: string[];
  force: ExerciseForce;
  level: ExerciseLevel;
  mechanic: ExerciseMechanic;
  equipment: ExerciseEquipment;
  category: ExerciseCategory;
  primaryMuscles: ExerciseMuscle[];
  secondaryMuscles: ExerciseMuscle[];
  images: string[];
};

export type ExerciseSeries = Pick<
  Exercise,
  'category' | 'primaryMuscles' | 'images'
> & {
  id: string;
  exerciseName: string;
};

export type Workout = {
  id: string;
  name: string;
  exercises: Exercise[];
};
