import { Training } from "../types/training";
import { useFetchTrainings } from "./useFetchTrainings";

interface UseTraining {
  training: Training | null;
  loading: boolean;
  error: Error | null;
}

export const useTraining = (index: number): UseTraining => {
  const { data: training, ...rest } = useFetchTrainings<Training>((trainings) => trainings[index]);

  return {
    ...rest,
    training,
  }
};
