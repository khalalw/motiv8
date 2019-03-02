import { Exercise } from './exercise.model';
import { Action } from '@ngrx/store';

export const SET_AVAILABLE_EXERCISES = '[Training] Set Available Trainings';
export const SET_FINISHED_EXERCISES = '[Training] Set Finished Trainings';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableExercises implements Action {
  readonly type = SET_AVAILABLE_EXERCISES;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedExercises implements Action {
  readonly type = SET_FINISHED_EXERCISES;

  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: Exercise) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}
export type TrainingActions =
  | SetAvailableExercises
  | SetFinishedExercises
  | StartTraining
  | StopTraining;