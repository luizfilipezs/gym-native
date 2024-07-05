import { Training } from "../types/training";
import { useFetchTrainings } from "./useFetchTrainings";

export const useTrainings = () => {
  const { loading, data } = useFetchTrainings<Training[]>((trainings) => trainings);

  return {
    loadingTrainings: loading,
    trainings: data,
  };
};
