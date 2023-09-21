// import { useState } from "react";
import "./poke-info.scss";

const PokeInfo = ({ localdata, validateAnswers }) => {
  // const [refresh, setRefresh] = useState(false);
  // console.log(localdata);
  // const { id, answers, question, typeAnswer } = localdata;
  let filterData = [];
  const NumberOfQuestions = 10;

  // const toggleRefresh = () => {
  //   setRefresh(!refresh);
  // };

  for (let i = 0; i < NumberOfQuestions; i++) {
    filterData.push(localdata[Math.floor(Math.random() * localdata.length)]);
  }

  return (
    <div className="poke-info">
      <form className="info-container">
        {filterData.map(({ question, answers, typeAnswer }, index) => {
          return (
            <div className="info-btn">
              <p className="info-para"> {question} </p>
              <div className="info-option__container">
                <ul className="info-option__list">
                  <li className="info-option">
                    <input
                      className="info-input"
                      type="radio"
                      name={index + 1}
                      value={typeAnswer[0]}
                    />
                    {answers[0]}
                  </li>
                  <li className="info-option">
                    <input
                      className="info-input"
                      type="radio"
                      name={index + 1}
                      value={typeAnswer[1]}
                    />
                    {answers[1]}
                  </li>
                  <li className="info-option">
                    <input
                      className="info-input"
                      type="radio"
                      name={index + 1}
                      value={typeAnswer[2]}
                    />
                    {answers[2]}
                  </li>
                  <li className="info-option">
                    <input
                      className="info-input"
                      type="radio"
                      name={index + 1}
                      value={typeAnswer[3]}
                    />
                    {answers[3]}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        <div className="submit-btn">
          <input
            className="submit-btn__input"
            type="submit"
            onClick={validateAnswers}
          />
        </div>
      </form>
    </div>
  );
};

export default PokeInfo;
