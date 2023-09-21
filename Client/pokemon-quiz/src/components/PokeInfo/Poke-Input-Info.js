// import { useState } from "react";
import "./poke-info.scss";

const PokeInfo = ({ localdata }) => {
  // const [refresh, setRefresh] = useState(false);
  // console.log(localdata);
  // const { id, answers, question, typeAnswer } = localdata;
  let filterData = [];
  const NumberOfQuestions = 10;

  // const toggleRefresh = () => {
  //   setRefresh(!refresh);
  // };

  const validateAnswers = () => {
    let UserAnswers = [];
    let ElementList = [
      "Normal",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Ice",
      "Fighting",
      "Poison",
      "Ground",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Ghost",
      "Dragon",
      "Dark",
      "Steel",
      "Fairy",
    ];
    let TypeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let selected = document.getElementsByTagName("input");
    // Collects all user answers into UserAnswers
    for (let i = 0; i < selected.length; i++) {
      if ((selected[i].type = "radio")) {
        if (selected[i].checked) UserAnswers.push(selected[i].value);
      }
    }
    // Counts results of element count
    for (let i = 0; i < UserAnswers.length; i++) {
      if (UserAnswers[i] === "Normal") TypeCount[0]++;
      if (UserAnswers[i] === "Fire") TypeCount[1]++;
      if (UserAnswers[i] === "Water") TypeCount[2]++;
      if (UserAnswers[i] === "Grass") TypeCount[3]++;
      if (UserAnswers[i] === "Electric") TypeCount[4]++;
      if (UserAnswers[i] === "Ice") TypeCount[5]++;
      if (UserAnswers[i] === "Fighting") TypeCount[6]++;
      if (UserAnswers[i] === "Poison") TypeCount[7]++;
      if (UserAnswers[i] === "Ground") TypeCount[8]++;
      if (UserAnswers[i] === "Flying") TypeCount[9]++;
      if (UserAnswers[i] === "Psychic") TypeCount[10]++;
      if (UserAnswers[i] === "Bug") TypeCount[11]++;
      if (UserAnswers[i] === "Rock") TypeCount[12]++;
      if (UserAnswers[i] === "Ghost") TypeCount[13]++;
      if (UserAnswers[i] === "Dragon") TypeCount[14]++;
      if (UserAnswers[i] === "Dark") TypeCount[15]++;
      if (UserAnswers[i] === "Steel") TypeCount[16]++;
      if (UserAnswers[i] === "Fairy") TypeCount[17]++;
    }
    console.log(UserAnswers);
    console.log(TypeCount);
    let pos = 0;
    //Find largest count of element
    for (let i = 0; i < TypeCount.length; i++) {
      if (TypeCount[pos] < TypeCount[i]) pos = i;
    }
    alert(`You are a ${ElementList[pos]} Pokemon!`);
    const result = ElementList[pos];
    // toggleRefresh();
  };

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
