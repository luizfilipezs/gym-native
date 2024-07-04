import { useEffect, useState } from "react";
import { Training } from "../types/training";
import { fetchTrainings } from "./fetchTrainings";

export const useTraining = (index: number) => {
  const [loadingTraining, setLoadingTraining] = useState(true);
  const [training, setTraining] = useState<Training | null>(null);

  useEffect(() => {
    fetchTrainings()
      .then((trainings) => setTraining(trainings[index]))
      .finally(() => setLoadingTraining(false));
  }, []);

  return { loadingTraining, training };
};
