import { AppScreen } from "./app-screen";

export type RootStackParamList = {
  [AppScreen.TrainingList]: undefined;
  [AppScreen.TrainingDetail]: {
    index: number;
  };
  [AppScreen.ExerciseDetail]: {
    trainingIndex: number; 
    index: number;
  };
};
