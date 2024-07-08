import { Training } from "../types/training";
import { useFetchTrainings } from "./useFetchTrainings";

interface UseTrainings {
  trainings: Training[] | null;
  loading: boolean;
  error: Error | null;
}

export const useTrainings = (): UseTrainings => {
  const { data: trainings, ...rest } = useFetchTrainings<Training[]>((trainings) => trainings);

  return {
    ...rest,
    trainings,
  }
};
