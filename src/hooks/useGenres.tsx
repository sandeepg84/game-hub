import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreList {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenreList>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;