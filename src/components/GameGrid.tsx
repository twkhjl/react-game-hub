import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import numArray from "../services/num-array";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Platform } from "../hooks/usePlatforms";
import { Ordering } from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrdering: Ordering | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrdering,
}: Props) => {
  const { data, error, isLoading } = useGames({
    selectedGenre,
    selectedPlatform,
    selectedOrdering,
  });

  const skeletonArr = numArray(20);

  return (
    <>
      {isLoading && (
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 5,
          }}
          minWidth={{
            base: "90vw",
            lg: "80vw",
          }}
          spacing={3}
          padding={5}
        >
          {skeletonArr.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        </SimpleGrid>
      )}

      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
        padding={5}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
