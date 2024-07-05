import { Training } from "../types/training";
import { useFetchTrainings } from "./useFetchTrainings";

export const useTraining = (index: number) => {
  const { loading, data } = useFetchTrainings<Training>((trainings) => trainings[index]);

  return {
    loadingTraining: loading,
    training: data,
  };
};
