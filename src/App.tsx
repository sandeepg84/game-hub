import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GamesGrid from "./Components/GamesGrid";
import useGenres, { Genre } from "./hooks/useGenres";

function App() {
  const { genres } = useGenres();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
