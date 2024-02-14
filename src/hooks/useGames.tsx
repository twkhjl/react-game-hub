import { Ordering } from "../components/SortSelector";
import useData from "./useData";
import { Genre } from "./useGenres";
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
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrdering: Ordering | null;
  searchString: string | null;
}

const useGames = ({
  selectedGenre,
  selectedPlatform,
  selectedOrdering,
  searchString,
}: Props) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedOrdering?.value,
        search: searchString,
      },
    },
    [
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedOrdering?.value,
      searchString,
    ]
  );

export default useGames;
