import "./poke-card.scss";

const PokeCard = () => {
  return (
    <div className="pokemon__container">
      <div className="poke__card">
        <div className="poke__card-image">
          <img className="poke__card-image-img" src="" alt="Pokemon img" />
        </div>
        <div className="poke__card-info">
          <ul className="poke__card-info-list">
            <li className="poke__card-info-item">Name: </li>
            <li className="poke__card-info-item">Type: </li>
            <li className="poke__card-info-item">information: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
