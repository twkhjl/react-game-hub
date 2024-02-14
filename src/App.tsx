import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { SingleValue } from "chakra-react-select";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector, {
  platformOption,
} from "./components/PlatformSelector";
import SortSelector, { Ordering } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";

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
        <GridItem area="aside" marginTop={160} paddingX={3}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={5} marginTop={120}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex
            gap={5}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
            alignItems={{
              base: "stretch",
              sm: "",
            }}
          >
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
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
