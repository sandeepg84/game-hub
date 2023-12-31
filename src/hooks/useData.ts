import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchData<T>>(endpoint, { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
