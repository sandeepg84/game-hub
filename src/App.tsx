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
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform: Platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
