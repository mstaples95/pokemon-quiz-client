import "./poke-info.scss";

const PokeInfo = () => {
  return (
    <div className="poke-info">
      <div className="input-container">
        <label>First Name:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="info-container">
        <div className="info-btn">
          <p> Touch me </p>
        </div>
        <div className="info-btn">
          <p> Touch me </p>
        </div>
        <div className="info-btn">
          <p> Touch me </p>
        </div>
        <div className="info-btn">
          <p> Touch me </p>
        </div>
        <div className="info-btn">
          <p> Touch me </p>
        </div>
        <div className="info-btn">
          <p> Touch me </p>
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;
