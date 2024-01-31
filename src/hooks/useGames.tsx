import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  released: string;
  background_image: string;
  updated: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setIsLoading(false);
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
