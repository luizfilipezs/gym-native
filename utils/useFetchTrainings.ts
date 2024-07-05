import { useEffect, useState } from "react";
import { Training } from "../types/training";
import { fetchTrainings } from "./fetchTrainings";

export const useFetchTrainings = <T>(processResults: (trainings: Training[]) => T) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetchTrainings()
      .then(processResults)
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { loading, data };
};