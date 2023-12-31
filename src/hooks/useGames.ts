import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

interface FecthGameList {
  count: number;
  results: Game[];
}

const useGames = () => {
  return useData<Game>("/games");
};

export default useGames;
