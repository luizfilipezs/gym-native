import { Exercise } from "../types/exercise";
import { useFetchTrainings } from "./useFetchTrainings";

interface UseExerciseParams {
  trainingIndex: number;
  exerciseIndex: number;
}

interface UseExercise {
  exercise: Exercise | null;
  loading: boolean;
  error: Error | null;
}

export const useExercise = ({ trainingIndex, exerciseIndex }: UseExerciseParams): UseExercise => {
  const { data: exercise, ...rest } = useFetchTrainings<Exercise>(
    (trainings) => trainings[trainingIndex]?.exercises[exerciseIndex]
  );

  return {
    ...rest,
    exercise,
  };
};
