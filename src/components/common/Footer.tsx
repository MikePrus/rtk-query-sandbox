import { useEffect } from "react";
import { useLazyGetPokemonByNameQuery } from "../../services/pokemon";

const Footer = () => {
  const [getPokemonByName, { data: pokemons }] = useLazyGetPokemonByNameQuery();

  useEffect(() => {
    getPokemonByName({
      name: "bulbasaur",
      ids: [1, 2, 3],
    });
  }, []);
  return <footer>Footer</footer>;
};

export default Footer;
