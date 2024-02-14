import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

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

interface Props {
  gameQuery: GameQuery;
}

const useGames = ({ gameQuery }: Props) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platformOption?.id,
        ordering: gameQuery.ordering?.value,
        search: gameQuery.searchString,
      },
    },
    [gameQuery]
  );

export default useGames;
