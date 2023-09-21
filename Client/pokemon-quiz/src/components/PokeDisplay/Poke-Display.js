import "./poke-display.scss";
import PokemonArr from "../../data/pokemonArr.json"

//const chosenType = ()

const getRandom = (chosenType) => {
  const pokemonOfType = PokemonArr[chosenType];
  if (pokemonOfType) {
    const randomIndex = Math.floor(Math.random() * pokemonOfType.length)
    return pokemonOfType(randomIndex)
  }
  return null;
};

const PokeDisplay = ({ chosenType }) => {
  const randomPokemon = getRandom(chosenType);

  if (!randomPokemon) {
    return <div className="display__container">Type is not determined yet.</div>;
  }

  const { name, type, description } = randomPokemon
  const picName = name.toLowerCase

  return (
    <div className="display__container">
      <div className="pokemon__display">
        <div className="pokemon__display-image">
          <img className="pokemon__display-image-img" src={`https://img.pokemondb.net/artwork/original/${name}-gen2.jpg`} alt="Pokemon" />
        </div>
        <div className="pokemon__display-info">
          <ul className="pokemon__display-info-list">
            <li className="pokemon__display-info-item">Name: tolowercase{picName}</li>
            <li className="pokemon__display-info-item">Description: {description} </li>
            <li className="pokemon__display-info-item">Type: {type} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeDisplay;
