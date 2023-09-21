// import { useParams } from "react-router-dom";
// import "./poke-card.scss";

// const PokeCard = (pokemonData) => {
//   console.log(pokemonData);
//   const [results] = pokemonData;

//   return (
//     <div className="pokemon__container">
//       {pokemonData.map((pokeData) => (
//         <div className="poke__card" key={pokeData.id}>
//           <div className="poke__card-image">
//             <img
//               className="poke__card-image-img"
//               src={results.url}
//               alt={results.name}
//             />
//           </div>
//           <div className="poke__card-info">
//             <ul className="poke__card-info-list">
//               <li className="poke__card-info-item">Name:{results.name} </li>
//               <li className="poke__card-info-item">Type: </li>
//               <li className="poke__card-info-item">information: </li>
//             </ul>
//           </div>
//         </div>
//       ))}
//       ;
//     </div>
//   );
// };

// export default PokeCard;

import React from "react";
import "./poke-card.scss";



const PokeCard = ({ data }) => {
  return (
    <div className="pokemon__container">
      {data.map((pokeData) => (
        <div className="poke__card" key={pokeData.name}>
          <div className="poke__card-image">
            <img
              className="poke__card-image-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokeData.url.split("/")[6]
              }.png`}
              alt={pokeData.name}
            />
          </div>
          <div className="poke__card-info">
            <ul className="poke__card-info-list">
              <li className="poke__card-info-item">Name: {pokeData.name} </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokeCard;
