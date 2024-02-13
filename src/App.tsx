import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { SingleValue } from "chakra-react-select";
import { useState } from "react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector, {
  platformOption,
} from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { Ordering } from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrdering, setSelectedOrdering] = useState<Ordering | null>(
    null
  );

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
        <HStack justifyContent={"space-between"} marginEnd={"15px"}>
          <NavBar />
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre: Genre) => {
              setSelectedGenre(genre);
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack display={"flex"} justifyContent={"flex-start"} spacing={5}>
          <PlatformSelector
            onSelectPlatform={function (
              newValue: SingleValue<platformOption>
            ): void | undefined {
              setSelectedPlatform(newValue);
            }}
          ></PlatformSelector>
          <SortSelector
            selectedOrdering={selectedOrdering}
            onSelectOrdering={(ordering: Ordering) => {
              setSelectedOrdering(ordering);
            }}
          ></SortSelector>
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedOrdering={selectedOrdering}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
