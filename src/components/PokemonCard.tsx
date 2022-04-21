const PokemonCard: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default PokemonCard;
