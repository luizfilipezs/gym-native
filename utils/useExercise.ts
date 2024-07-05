import { Exercise } from "../types/exercise";
import { useFetchTrainings } from "./useFetchTrainings";

interface UseExerciseParams {
  trainingIndex: number;
  exerciseIndex: number;
}

export const useExercise = ({ trainingIndex, exerciseIndex }: UseExerciseParams) => {
  const { loading, data } = useFetchTrainings<Exercise>((trainings) => trainings[trainingIndex]?.exercises[exerciseIndex]);

  return {
    loadingExercise: loading,
    exercise: data,
  };
};
