import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
