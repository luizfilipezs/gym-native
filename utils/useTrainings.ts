import { useEffect, useState } from "react";
import { Training } from "../types/training";
import { fetchTrainings } from "./fetchTrainings";

export const useTrainings = () => {
  const [loadingTrainings, setLoadingTrainings] = useState(true);
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetchTrainings()
      .then(setTrainings)
      .finally(() => setLoadingTrainings(false));
  }, []);

  return { loadingTrainings, trainings };
};
