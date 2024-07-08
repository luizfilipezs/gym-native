import { useEffect, useState } from "react";
import { Training } from "../types/training";
import { fetchTrainings } from "./fetchTrainings";
import { FetchResponse } from "../types/fetch-response";

export const useFetchTrainings = <T>(processResults: (trainings: Training[]) => T): FetchResponse<T> => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchTrainings()
      .then(processResults)
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};