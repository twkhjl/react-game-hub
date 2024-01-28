import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <HStack justifyContent={"space-between"} marginEnd={"15px"}>
          <NavBar />
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
