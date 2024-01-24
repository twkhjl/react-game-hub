import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";

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
      <GridItem area="main" bg="green">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
