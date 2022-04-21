import { useEffect } from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PokemonCard from "./components/PokemonCard";

import { useLazyGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  // const { data, error, isLoading, isSuccess } = useGetPokemonsQuery();
  const [getPokemonByName, { data: pokemons }] = useLazyGetPokemonByNameQuery();

  useEffect(() => {
    const cleanup = () => {
      window.open("https://stackoverflow.com/");
    };

    window.addEventListener("beforeunload", cleanup);

    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, []);
  // TODO: style the app
  // TODO: add pagination
  // TODO: add search input for find pokemon by name
  // TODO: add basic react-router-dom v.6
  // TODO: add single pokemon page

  return (
    <div className="App">
      <Header />
      {/* {isSuccess &&
        data?.results.map((pokemon) => <PokemonCard title={pokemon?.name} />)} */}
      <Footer />
    </div>
  );
}

export default App;
