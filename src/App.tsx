import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { SingleValue } from "chakra-react-select";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector, {
  platformOption,
} from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import SortSelector, { Ordering } from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  ordering: Ordering | null;
  searchString: string | null;
  platformOption: SingleValue<platformOption> | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onEnterSearchString={(searchString: string) => {
            setGameQuery({ ...gameQuery, searchString });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack display={"flex"} justifyContent={"flex-start"} spacing={5}>
          <PlatformSelector
            onSelectPlatform={function (
              platformOption: SingleValue<platformOption>
            ): void | undefined {
              setGameQuery({ ...gameQuery, platformOption });
            }}
          ></PlatformSelector>
          <SortSelector
            selectedOrdering={gameQuery.ordering}
            onSelectOrdering={(ordering: Ordering) => {
              setGameQuery({ ...gameQuery, ordering });
            }}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
