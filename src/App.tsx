import {
  Grid,
  GridItem,
  HStack,
  Image,
  List,
  ListItem,
  Show,
  Text,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GamesGrid from "./Components/GamesGrid";
import useGenres, { Genre } from "./hooks/useGenres";
import GenreList from "./Components/GenreList";

function App() {
  const { data } = useGenres();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
