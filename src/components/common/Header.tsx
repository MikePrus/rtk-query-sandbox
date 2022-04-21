import { useEffect } from "react";
import { useLazyGetPokemonByNameQuery } from "../../services/pokemon";

const Header = () => {
  const [getPokemonByName, { data: pokemons }] = useLazyGetPokemonByNameQuery();

  useEffect(() => {
    getPokemonByName({
      name: "bulbasaur",
      ids: [1, 2, 3],
    });
  }, []);

  return <header>Header</header>;
};

export default Header;
