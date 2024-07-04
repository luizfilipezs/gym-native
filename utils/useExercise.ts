import { useEffect, useState } from "react";
import { fetchTrainings } from "./fetchTrainings";
import { Exercise } from "../types/exercise";

interface UseExerciseParams {
  trainingIndex: number;
  exerciseIndex: number;
}

export const useExercise = ({ trainingIndex, exerciseIndex }: UseExerciseParams) => {
  const [loadingExercise, setLoadingExercise] = useState(true);
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    fetchTrainings()
      .then((trainings) => setExercise(trainings[trainingIndex].exercises[exerciseIndex]))
      .finally(() => setLoadingExercise(false));
  }, []);

  return { loadingExercise, exercise };
};
