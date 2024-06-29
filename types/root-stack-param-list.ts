import { AppScreen } from "./app-screen";

export type RootStackParamList = {
  [AppScreen.Home]: undefined;
  [AppScreen.Training]: {
    index: number;
  };
  [AppScreen.Exercise]: {
    trainingIndex: number; 
    index: number;
  };
};
