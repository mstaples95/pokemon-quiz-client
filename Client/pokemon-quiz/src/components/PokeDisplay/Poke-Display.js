import "./poke-display.scss";

const PokeDisplay = () => {
  return (
    <div className="display__container">
      <div className="pokemon__display">
        <div className="pokemon__display-image">
          <img className="pokemon__display-image-img" src="" alt="Pokemon" />
        </div>
        <div className="pokemon__display-info">
          <ul className="pokemon__display-info-list">
            <li className="pokemon__display-info-item">Output The Name here</li>
            <li className="pokemon__display-info-item">Title of Pokemon: </li>
            <li className="pokemon__display-info-item">Description: </li>
            <li className="pokemon__display-info-item">Type: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeDisplay;
