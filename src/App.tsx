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
import { useState } from "react";

function App() {
  const { data } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
